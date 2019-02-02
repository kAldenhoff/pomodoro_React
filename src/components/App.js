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
      this.closeModal = this.closeModal.bind(this);
      this.restartTimer = this.restartTimer.bind(this);

      this.timer = React.createRef();
    }

    openModal() {
    this.setState({modalIsOpen: true});
    }

  closeModal() {
    this.setState({modalIsOpen: false});
    }

    restartTimer(){
      this.timer.current.startTimer();
      this.closeModal();
    }

  render(){
      return(
        <div id="appContainer">
          <Timer openModal = {this.openModal} ref={this.timer} />
          <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal"
              className="Modal"
              overlayClassName="Overlay"
            >
          <ModalAlert closeModal = {this.closeModal}
                      restartTimer = {this.restartTimer} />
          </Modal>
      </div>
      );
  }
}
