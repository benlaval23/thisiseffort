import React from 'react';
import './Ticketshow.css';

export class Ticketshow extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.refreshTitle = this.refreshTitle.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  refreshTitle() {
    this.props.onClick();
  }

  render() {
    return (
      <div>
        <form>
          <input id="top-form" className="ticket" type="text" /*value={this.props.title}*/ onChange={this.handleChange} placeholder="Your task" />
          <button type="button" id="refresh" onClick={this.refreshTitle}><i className="fas fa-redo"></i></button>
        </form>
        <h3>Task: {this.props.title}</h3>
      </div>
    );
  }
}
