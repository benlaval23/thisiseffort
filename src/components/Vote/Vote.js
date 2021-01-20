import React from 'react';
import './Vote.css';

export class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e.target.value);
  }

  render() {
    return (
      <form id="numbers">
        <button type="button" value="1" id="number" onClick={this.handleClick}>
          1
        </button>
        <button type="button" value="2" id="number" onClick={this.handleClick}>
          2
        </button>
        <button type="button" value="3" id="number" onClick={this.handleClick}>
          3
        </button>
        <button type="button" value="5" id="number" onClick={this.handleClick}>
          5
        </button>
        <button type="button" value="8" id="number" onClick={this.handleClick}>
          8
        </button>
        <button type="button" value="13" id="number" onClick={this.handleClick}>
          13
        </button>
        <button type="button" value="21" id="number" onClick={this.handleClick}>
          21
        </button>
      </form>
    );
  }
}
