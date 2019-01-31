import React, { Component } from 'react'
import Timer from './Timer'
import ModalAlert from './Modal'
import '../css/app.css'
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default class App extends Component {

  constructor() {
      super();

      this.state = {
        modalIsOpen: false
      };

      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
    this.setState({modalIsOpen: true});
    }

  afterOpenModal() {
    // references are now sync'd and can be accessed.

    }

  closeModal() {
    this.setState({modalIsOpen: false});
    }

  render(){
      return(
        <div id="appContainer">
        <Timer openModal = {this.openModal} />
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
        <ModalAlert />
        <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
      );
  }
}
