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
      <form id="numbers" onClick={this.handleClick} >
        <button type="button" value="1" id="number">
          1
        </button>
        <button type="button" value="2" id="number">
          2
        </button>
        <button type="button" value="3" id="number">
          3
        </button>
        <button type="button" value="5" id="number">
          5
        </button>
        <button type="button" value="8" id="number">
          8
        </button>
        <button type="button" value="13" id="number">
          13
        </button>
        <button type="button" value="21" id="number">
          21
        </button>
      </form>
    );
  }
}
