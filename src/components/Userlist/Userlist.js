import React from 'react';
import './Userlist.css';

export class Userlist extends React.Component {
  render() {
    return (
      <div key="key" id="user-box">
        {this.props.users.map(user => (
          <div className="user-list">
            <p id="p1">{user.name}</p>
            {this.props.show ?
            <p id="p2">{user.vote}</p> :
            <p id="p2">{user.status}</p>}
          </div>
        ))}
      </div>
    );
  }
}

