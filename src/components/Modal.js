import React, { Component } from 'react'
import ModalMessage from './ModalMessage'
import ModalButtons from './ModalButtons'

export default class Modal extends Component {

  render(){
    return(
      <div id="modalContent">
        <ModalMessage />
        <ModalButtons restartTimer ={this.props.restartTimer} closeModal = {this.props.closeModal} />
      </div>
    );
  }
}
