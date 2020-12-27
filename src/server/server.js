// youtube
// const express = require('express')();
// const app = express();
// const server = require('http').Server(app);
// const io = module.exports.io = require('socket.io')(server, {
//   cors: {
//     origin: '*',
//     methods: ['GET', 'POST'],
//   },
// });

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = module.exports.io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const port = process.env.PORT || 3300;

// youtube
// app.use( express.static(__dirname + '/../../build'));


if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use( express.static(__dirname + '/../../build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'server.html'));
  });
}

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + './server.html');
// });

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
        count: 1
      };
    } else {
      rooms[room].count += 1;
      rooms[room].users.push(user);
    }
    emitRoom(room);
    console.log(rooms[room]);

    socket.on('change_title', newTitle => {
      rooms[room].title = newTitle;
      console.log(rooms[room])
      emitRoom(room);
    });

    socket.on('change_name', newName => {
      rooms[room].users.map(u => {
        if (u.socketId === socket.id) {
          u.name = newName;
        };
      });
      console.log(rooms[room]);
      emitRoom(room);
    });

    socket.on('add_vote', newVote => {
      rooms[room].users.map(u => {
        if (u.socketId === socket.id) {
          u.vote = newVote;
          u.status = 'Voted';
        }
      });
      console.log(rooms[room]);
      emitRoom(room);
    });

    socket.on('show_votes', () => {
      rooms[room].show = true;
      console.log(rooms[room]);
      emitRoom(room);
    });

    socket.on('refresh_title', () => {
      rooms[room].users.map(u => {
        u.vote = 'No vote';
        u.status = 'Awaiting'
      });
      rooms[room].title = '';
      rooms[room].show = false;
      console.log(rooms[room]);
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
      console.log(rooms[room]);
      emitRoom(room);
    });
  });

});

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});

// let users = [];

// const emitUsers = () => {
//   io.emit('users', users);
// };

// const removeUser = (users, socketId) => {
//   users.map(u => {
//     if (u.socketId === socketId) {
//       const index = users.indexOf(u);
//       users.splice(index, 1);
//     }
//     return users;
//   });
// };

// const updateName = (users, newName, socketId) => {
//   users.map(u => {
//     if (u.socketId === socketId) {
//       u.name = newName;
//     }
//   });
//   return users;
// };

// const updateVote = (users, newVote, socketId) => {
//   users.map(u => {
//     if (u.socketId === socketId) {
//       u.vote = newVote;
//       u.status = 'Voted';
//     }
//   });
//   return users;
// };

// const refreshVotes = (users) => {
//   users.map(u => {
//     u.vote = 'No vote';
//     u.status = 'Awaiting'
//   });
//   return users;
// };


// io.on('connection', socket => {
//   console.log('user connected: ', socket.id);

//   socket.on('new_user', user => {
//     user.socketId = socket.id;
//     users.push(user);
//     console.log('Current connected Users: ', users);
//     emitUsers();
//   });

//   socket.on('change_title', newTitle => {
//     console.log('Server receiving newTitle');
//     io.sockets.emit('send_title', newTitle);
//   });

//   socket.on('change_name', newName => {
//     console.log('Server receiving newName');
//     updateName(users, newName, socket.id);
//     emitUsers();
//   });

//   socket.on('add_vote', newVote => {
//     updateVote(users, newVote, socket.id);
//     emitUsers();
//   });

//   socket.on('show_votes', () => {
//     io.sockets.emit('show_votes');
//   });

//   socket.on('refresh_title', () => {
//     refreshVotes(users);
//     emitUsers();
//     io.sockets.emit('blank_title');
//   })

//   socket.on('disconnect', () => {
//     console.log('user disconnected: ', socket.id);
//     removeUser(users, socket.id);
//     console.log('Current connected Users: ', users);
//     emitUsers();
//   });
// });
