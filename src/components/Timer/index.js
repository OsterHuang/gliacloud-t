import React, { Component } from 'react';
import moment from 'moment'

import './Timer.css';

let timerInterval

class Timer extends Component {
  // started, stopped, paused
  state = {
    status: 'stopped',
    timeCount: 0
  }

  componentWillMount () {
    timerInterval = setInterval(
      this.increaseTime
      ,1000
    )
  }

  componentWillUnmount () {
    clearInterval(timerInterval)
  }

  increaseTime = () => {
    const { status, timeCount } = this.state
    if (status === 'started') {
      this.setState({timeCount: timeCount + 1})
    }
  }

  handleStartTimer = () => {
    this.setState({
      status: 'started',
      timeCount: 0
    })
  }

  handleStopTimer = () => {
    this.setState({
      status: 'stopped'
    })
  }

  handlePauseTimer = () => {
    const { status } = this.state
    if (status !== 'paused' && status !== 'started') return

    this.setState({
      status: status === 'paused' ? 'started' : 'paused'
    })
  }

  render() {
    const { status, timeCount } = this.state

    return (
      <div className='timer'>
        {moment(new Date(timeCount * 1000) - 8 * 60 * 60 * 1000).format('HH:mm:ss')}
        <div className='actions'>
          <button onClick={this.handleStartTimer}>Start</button>
          <button onClick={this.handlePauseTimer} hidden={status !== 'started' && status !== 'paused'}>
            {status === 'started' && 'Pause'}
            {status === 'paused' && 'Resume'}
          </button>
          <button onClick={this.handleStopTimer}>Stop</button>
        </div>
      </div>
    )
  }
}

export default Timer