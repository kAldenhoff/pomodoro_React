import React, { Component } from 'react'
import '../css/timerTime.css'

export default class TimerTime extends Component {
  getMinutes(){
    return this.props.value.minutes > 9 ? ""+this.props.value.minutes : "0"+this.props.value.minutes;
  }

  getSeconde(){
    return this.props.value.secondes > 9 ? ""+this.props.value.secondes : "0"+this.props.value.secondes;
  }

  handleMinuteChange(event){
    this.props.handleMinuteChange(event.target.value);

  }

  handleSecondeChange(event){
    this.props.handleSecondeChange(event.target.value);
  }

  render(){
      return(
          <div id="timeContainer">
            <input className="no-spinners" id="inputMinutes" type="text" value={this.getMinutes()} onChange={this.handleMinuteChange.bind(this)} readOnly={this.props.value.timerRunning}/>
            <span>:</span>
            <input className="no-spinners" id="inputSecondes" type="text"  value={this.getSeconde()} onChange={this.handleSecondeChange.bind(this)} readOnly={this.props.value.timerRunning}/>
          </div>
      )
  }
}
