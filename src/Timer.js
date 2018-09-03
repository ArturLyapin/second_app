import React, { Component } from 'react';
import FormattedDate from './FormattedDate'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({date: new Date})
  }

  render() {
    return (
      <div className="Timer">
        <p>It is {this.props.name} <FormattedDate date={this.state.date}></FormattedDate></p>
      </div>
    );
  }
}

export default Timer;
