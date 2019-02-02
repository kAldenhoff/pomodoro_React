import React, { Component } from 'react'
import ModalMessage from './ModalMessage'
import '../css/timerButton.css'

export default class Modal extends Component {

  render(){
    return(
      <div>
        <ModalMessage />
        <button onClick={this.props.closeModal}>close</button>
        <button onClick={this.props.restartTimer}>Restart</button>
      </div>
    );
  }
}
