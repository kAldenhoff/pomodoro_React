import React, { Component } from 'react'
import '../css/timerButton.css'

export default class TimerButtons extends Component {
  constructor(props) {
    super(props);
    this.clickStartButton = this.clickStartButton.bind(this);
  }

  clickStartButton(){
    this.props.timerRunning ? this.props.stopTimer() : this.props.startTimer()
  }
  render(){
    return(
      <div id="timerButtonContainer">
        <button className={this.props.timerRunning ? "invisible" : "visible"} id="decrementMinute" onClick={this.props.decrementMinute}>-</button>
        <button id="startStopButton" onClick={this.clickStartButton}>{this.props.timerRunning ? "RESET" : "START"}</button>
        <button className={this.props.timerRunning ? "invisible" : "visible"} id="incrementMinute" onClick={this.props.incrementMinute}>+</button>
      </div>
    );
  }
}
