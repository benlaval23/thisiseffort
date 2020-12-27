import React from 'react';
import './Nameshow.css';


export class Nameshow extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <form /*onSubmit={this.handleSubmit}*/>
        <input id="top-form" className="name" type="text" /*value={this.state.name}*/ onChange={this.handleChange} placeholder="Your alias"/>
      </form>
    );
  }
}
