import React, { Component } from 'react';
import axios from 'axios'

import './AirQuality.scss';

let intervalCall

class AirQuality extends Component {
  state = {
    sortType: '',
    list: []
  }

  componentWillMount () {
    this.callAirData()
    intervalCall = setInterval(
      this.callAirData
      ,10000
    )
  }

  componentWillUnmount () {
    clearInterval(intervalCall)
  }

  callAirData = () => {
    axios
      .get('http://opendata2.epa.gov.tw/AQI.json')
      .then(res => {
        this.setState({ list: res.data});
      })
  }

  handleSortList = () => {
    const { sortType } = this.state
    if (sortType === '') {
      this.setState({
        sortType: 'asc'
      })
    } else if (sortType === 'asc') {
      this.setState({
        sortType: 'desc'
      })
    } else if (sortType === 'desc') {
      this.setState({
        sortType: ''
      })
    }
  }

  render() {
    const { sortType, list } = this.state
    const displayList = [...list]

    if (sortType === 'asc') {
      displayList.sort((a, b) => a.SiteName.localeCompare(b.SiteName, 'zh-TW'))

    } else if (sortType === 'desc') {
      displayList.sort((a, b) => b.SiteName.localeCompare(a.SiteName, 'zh-TW'))
    }

    return (
      <div className='air-quality'>
        <button onClick={this.handleSortList}>
          Sort By Site Name
        </button>

        <div className='list'>
          <div className='row header'>
            <div className='col'>
              Site
            </div>
            <div className='col'>
              Pollutant
            </div>
            <div className='col'>
              Status
            </div>
            <div className='col'>
              PM 2.5
            </div>
          </div>
          {displayList && displayList.map((v, idx) => (<div className='row' key={idx}>
            <div className='col'>
              {v.SiteName}
            </div>
            <div className='col'>
              {v.Pollutant}
            </div>
            <div className='col'>
              {v.Status}
            </div>
            <div className='col'>
              {v['PM2.5_AVG']}
            </div>
          </div>))}
        </div>
      </div>
    )
  }
}

export default AirQuality