import React from 'react';
import { BrowserRouter as Router, link, Route } from 'react-router-dom';

class Enterroom extends React.Component {
  state = {
    path: ''
  }

  setPath = e => this.setState({path: e.target.value})

  go = e => {
    e.preventDefault()
    window.location.href = `room/${this.state.path}`
  }

  render() {
    return (
      <div className="chooseRoom">
        <form onSubmit={this.go} id="chooseRoom">
          <input id="new-room-input" type="text" name="room" value={this.path} onChange={this.setPath} placeholder="Create new room" />
          <button id="new-room-button" type="button"  onClick={this.go}>
            <i className="fas fa-sign-in-alt"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default Enterroom;
