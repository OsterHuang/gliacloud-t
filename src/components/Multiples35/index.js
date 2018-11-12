import React, { Component } from 'react';

class Multiples extends Component {
  state = {
    sum: 0
  }

  componentDidMount() {
    let sum = 0
    for (var i = 1; i <= 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i
        console.log(i, sum)
      }
    }
    this.setState({sum})
  }

  render() {
    const { sum } = this.state

    return (
      <div>
        The result of multiples 3, 5 below 1000 is {sum}
      </div>
    )
  }
}

export default Multiples