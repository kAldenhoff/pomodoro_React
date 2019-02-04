import React, { Component } from 'react'
import TimerTime from './TimerTime'
import TimerButtons from './TimerButtons'
import '../css/timer.css'

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 25,
      secondes:0,
      timerRunning: false,
    };
    this.incrementMinute = this.incrementMinute.bind(this);
    this.decrementMinute = this.decrementMinute.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.handleMinuteChange = this.handleMinuteChange.bind(this);
    this.handleSecondeChange = this.handleSecondeChange.bind(this);
    this.defaultMinutes = 25;
    this.defaultSecondes = 0;
  }

  incrementMinute(){
    this.setState((state) => ({
      minutes: state.minutes+1,
      secondes: state.secondes
    }));
  }

  decrementMinute(){
    this.setState({
      minutes: this.state.minutes-1,
      secondes: this.state.secondes
    })
  }

  startTimer(){
    if(this.state.minutes !=  0 || this.state.secondes !=0){
      this.timerID = setInterval(()=>this.progressTimer(),1000);
      this.setState({
        timerRunning: true,
      });
    }
  }

  progressTimer(){

    if(this.state.minutes == 0 && this.state.secondes == 1 ){
      this.props.openModal();
      this.stopTimer();
    }else{
      if(this.state.secondes == 0){
          this.setState({
            minutes:this.state.minutes-1 ,
            secondes:59,
          });
      }else {
        this.setState({
          minutes:this.state.minutes,
          secondes:this.state.secondes-1,
        });
      }
    }
  }

  stopTimer(){
    clearInterval(this.timerID);
    this.setState({
      minutes: this.defaultMinutes,
      secondes: this.defaultSecondes,
      timerRunning: false,

    })
  }

  handleMinuteChange(minutes){
    this.setState((state)=>({
      minutes: minutes.length > 2 ? parseInt(minutes.substring(1,minutes.length),10) : minutes,
      secondes: state.secondes
    }))
  }

  handleSecondeChange(secondes){
   let newSeconde = secondes > 59 ? 59 : secondes;
    this.setState((state)=>({
      minutes: state.minutes,
      secondes: newSeconde,
    }))
  }

  render(){
      return(
        <div id="timerAndButtonsContainer">
          <TimerTime value={this.state} handleMinuteChange = {this.handleMinuteChange} handleSecondeChange = {this.handleSecondeChange} />
          <TimerButtons timerRunning= {this.state.timerRunning} stopTimer = {this.stopTimer} startTimer = {this.startTimer} incrementMinute = {this.incrementMinute} decrementMinute = {this.decrementMinute} />
        </div>
      );
  }
}
