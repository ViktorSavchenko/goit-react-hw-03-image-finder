import React, { Component } from "react";
import {createPortal} from "react-dom";
import './Modal.css'

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onEscModalClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscModalClose);
  }

  onEscModalClose = e => {
    if (e.code === 'Escape') {
      this.props.onToggleModalShow();
    };
  };
  
  onBackdropModalClose = e => {
    if (e.currentTarget === e.target) { 
      this.props.onToggleModalShow();
    };
  };
  
  render() {
    const {children} = this.props;
    
    return createPortal(
      <div className="Overlay" onClick={this.onBackdropModalClose}>
        <div className="Modal">
          <img src={children} alt="" />
        </div>
      </div>, modalRoot);
  };
}; 

export default Modal;