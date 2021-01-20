import './App.css';
import { Nameshow } from '../Nameshow/Nameshow';
import { Ticketshow } from '../Ticketshow/Ticketshow';
import { Userlist } from '../Userlist/Userlist';
import { Vote } from '../Vote/Vote';
import React from 'react';
import '../Userlist/Userlist.css';
import io from 'socket.io-client';
import Confetti from 'react-confetti'

const socket = io.connect('/');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      title: '',
      show: false,
      count: 0,
      confetti: false,
      voted: false,
      showButton: false,
      admin: null
    };

    this.changeName = this.changeName.bind(this);
    this.showVotes = this.showVotes.bind(this);
  }

  componentDidMount() {
    let user = {
      name: 'New User',
      status: 'Awaiting',
      vote: 'No vote',
    };

    socket.emit('join_room', window.location.pathname, user);

    socket.on('room_update', room => {

      room.users.map(u => {
        if(u.socketId === socket.id) {
          if (u.vote !== 'No vote') {
            this.setState({
              users: room.users,
              title: room.title,
              show: room.show,
              count: room.count,
              confetti: room.confetti,
              id: socket.id,
              voted: true,
              showButton: room.showButton,
              admin: room.admin
            });
          } else {
            this.setState({
              users: room.users,
              title: room.title,
              show: room.show,
              count: room.count,
              confetti: room.confetti,
              id: socket.id,
              voted: false,
              showButton: room.showButton,
              admin: room.admin
            });
          }
        }
      })
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
          <Ticketshow onChange={this.changeTitle} title={this.state.title} onClick={this.refreshTitle} admin={this.state.admin} currentId={this.state.id}/>
          <Userlist users={this.state.users} show={this.state.show} />
          {(this.state.voted === false) && <Vote onClick={this.addVote} />}
          <section id="buttons">
            <button id="invite" className="clipboard">
              Invite
            </button>
            {(this.state.showButton === true) &&
            <button id="show-votes" onClick={this.showVotes}>
              Show Votes
            </button>}
          </section>
          <div>
            <p id="copied">Link copied to clipboard!</p>
          </div>
        </div>
        {/* {(this.state.confetti === true) && <Confetti width="2000" height="1000" />} */}
      </div>
    );
  }
}

export default App;
