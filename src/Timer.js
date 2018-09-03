import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super()
    this.state = { date: new Date}
  }

  render() {
    return (
      <div className="Timer">
        <p>It is {this.props.name} {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Timer;
