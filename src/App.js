import React, { Component } from 'react';

import Timer from './components/Timer'
import AirQuality from './components/AirQuality'
import Multiples35 from './components/Multiples35'

import './App.css';

class App extends Component {
  state = {
    showFun: ''
  }

  handleShowTimer = () => {
    this.setState({showFun: 'timer'})
  }

  handleShowApi = () => {
    this.setState({showFun: 'api'})
  }

  handleShow35 = () => {
    this.setState({showFun: '35'})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            Gliacloud practices
        </header>
        <div>
          <button onClick={this.handleShowTimer}>Show Timer exam</button>
          <button onClick={this.handleShowApi}>Show API exam</button>
          <button onClick={this.handleShow35}>Show 3, 5 exam</button>
          {this.state.showFun === 'timer' && <div>
            <h3>Timer</h3>
            <Timer />
          </div>}
          {this.state.showFun === 'api' && <div>
            <h3>Ajax Exam</h3>
            <AirQuality />
          </div>}
          {this.state.showFun === '35' && <div>
            <h3>3, 5 multiple Exam</h3>
            <Multiples35 />
          </div>}
        </div>
      </div>
    );
  }
}

export default App;
