import './App.css';
import { Nameshow } from '../Nameshow/Nameshow';
import { Ticketshow } from '../Ticketshow/Ticketshow';
import { Userlist } from '../Userlist/Userlist';
import { Vote } from '../Vote/Vote';
import React from 'react';
import '../Userlist/Userlist.css';
import io from 'socket.io-client';


// const socket = io.connect('/');
const socket = io.connect('http://localhost:3300/');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      title: '',
      show: false,
      count: 0
    };

    this.changeName = this.changeName.bind(this);
  }

  componentWillMount() {
    let user = {
      name: 'New User',
      status: 'Awaiting',
      vote: 'No vote',
    };

    socket.emit('join_room', window.location.pathname, user);

    socket.on('room_update', room => {
      this.setState({
        users: room.users,
        title: room.title,
        show: room.show,
        count: room.count
      });
      console.log("Current room: ", room);
    });
  };

  changeName(newName) {
    socket.emit('change_name', newName);
  }

  changeTitle(newTitle) {
    socket.emit('change_title', newTitle);
  }

  addVote(newVote) {
    socket.emit('add_vote', newVote);
  }

  showVotes() {
    socket.emit('show_votes');
  }

  refreshTitle() {
    socket.emit('refresh_title');
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <Nameshow onChange={this.changeName} />
          <Ticketshow onChange={this.changeTitle} title={this.state.title} onClick={this.refreshTitle}/>
          <Userlist users={this.state.users} show={this.state.show} />
          <Vote onClick={this.addVote} />
          <section id="buttons">
            <button id="invite" className="clipboard">
              Invite
            </button>
            <button id="show-votes" onClick={this.showVotes}>
              Show Votes
            </button>
          </section>
          <div>
            <p id="copied">Link copied to clipboard!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
