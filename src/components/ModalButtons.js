import React, { Component } from 'react'

 export default function ModalMessage(props){
  return(
    <div>
      <button onClick={props.closeModal}>close</button>
      <button onClick={props.restartTimer}>Restart</button>
    </div>
  );
}
