import React from 'react'
import './Modal.css';

export default function Modal({ children, state, setOpenModal, modalClose }) {
    return (
        <div className='modal-backdrop'>
            <article className='modal'>
                {children}
                <button onClick={modalClose}>닫기</button>
            </article>
        </div>
    )
}
