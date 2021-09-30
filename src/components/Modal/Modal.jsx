import React from "react";
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const MODAL_STYLES = {
    position: 'fixed',
    top: '9%',
    right: 0,
    
    backgroundColor: '#fff',
    width: '12rem',
    padding: '1rem',
    zIndex: 1000,
    borderRadius: '4px',
    boxShadow:'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px'
};

export default function Modal({ open, children }) {

    if (!open || !children) return null;

    return ReactDOM.createPortal(
        <>
            <div style={MODAL_STYLES}>
                <ul>{children}</ul>
            </div>
        </>, 
        modalRoot
    );
}