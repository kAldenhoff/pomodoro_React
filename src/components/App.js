import React, { Component } from 'react'
import Timer from './Timer'
import ModalAlert from './Modal'
import '../css/app.css'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content : {
    position              : 'relative',
    position              : 'static',
    width                 : '100%',
    height                : '100%',
    margin                :  'auto',
    background            :  'rgba(0, 0, 0, 0.9)',
    padding               : '0px',
    color                 : 'white',
  }
};

export default class App extends Component {

  constructor() {
      super();

      this.state = {
        modalIsOpen: false
      };

      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.restartTimer = this.restartTimer.bind(this);

      this.timer = React.createRef();
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
              onAfterOpen={this.afterOpenModal}
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
