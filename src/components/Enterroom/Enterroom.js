import React from 'react';
import './Enterroom.css';

class Enterroom extends React.Component {
  state = {
    path: ''
  }

  setPath = e => this.setState({path: e.target.value})

  randomString = (len) => {
    var text = "";

    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < len; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
  }

  go = e => {
    e.preventDefault()
    if (this.state.path) {
      window.location.href = `room/${this.state.path}`
    } else {
      window.location.href = `room/${this.randomString(3)}-${this.randomString(4)}-${this.randomString(3)}`
    }
  }

  render() {
    return (
      <form onSubmit={this.go} id="chooseRoom">
        <input id="new-room-input" type="text" name="room" value={this.path} onChange={this.setPath} placeholder="Enter room name" />
        <button id="new-room-button" type="button"  onClick={this.go}>
          <i className="fas fa-sign-in-alt"></i>
        </button>
      </form>
    );
  }
}

export default Enterroom;
