const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});
const PORT = process.env.PORT || 3300;

const root = path.join(__dirname, '/../../build')

app.use( express.static(root));

app.get('*', (req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});


var rooms = {};

// Emit function //
const emitRoom = room => {
  io.to(room).emit("room_update", rooms[room]);
};

// Sockets // Rooms //
io.on('connection', socket => {
  console.log('a user connected: ', socket.id);

  socket.on('join_room', function(room, user) {
    socket.join(room);
    user.socketId = socket.id;

    if (typeof rooms[room] === "undefined") {
      rooms[room] = {
        users: [user],
        title: null,
        show: false,
        count: 1,
        confetti: false,
        showButton: false
      };
    } else {
      rooms[room].count += 1;
      rooms[room].users.push(user);
    }
    emitRoom(room);

    socket.on('change_title', newTitle => {
      rooms[room].title = newTitle;
      emitRoom(room);
    });

    socket.on('change_name', newName => {
      rooms[room].users.map(u => {
        if (u.socketId === socket.id) {
          u.name = newName;
        };
      });
      emitRoom(room);
    });

    socket.on('add_vote', newVote => {
      rooms[room].users.map(u => {
        if (u.socketId === socket.id) {
          u.vote = newVote;
          u.status = 'Voted';
        }
      });
      rooms[room].showButton = true;
      emitRoom(room);
    });

    socket.on('show_votes', () => {
      rooms[room].show = true;
      if (rooms[room].users.every( u => u.vote === rooms[room].users[0].vote)) {
        rooms[room].confetti = true;
      };
      rooms[room].showButton = false;
      emitRoom(room);
    });

    socket.on('refresh_title', () => {
      rooms[room].users.map(u => {
        u.vote = 'No vote';
        u.status = 'Awaiting'
      });
      rooms[room].title = '';
      rooms[room].show = false;
      rooms[room].confetti = false;
      emitRoom(room);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected: ', socket.id);
      rooms[room].users.map(u => {
        if (u.socketId === socket.id) {
          const index = rooms[room].users.indexOf(u);
          rooms[room].users.splice(index, 1);
        };
      });
      rooms[room].count -= 1;
      emitRoom(room);
    });
  });

});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
