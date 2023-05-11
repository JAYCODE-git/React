import React from 'react'
import './Dialog.css'

export default function Dialog({ modal }) {
    return (
        <div className='dimmed'>
            <article className='dialog'>
                <h2>화이팅!!♥♥♥</h2>
                <p>당신의 꿈을 응원합니다!</p>
                <img src="/img/licat.png" alt="licat" />
                <button type="button" onClick={modal} className='btn-primary'>종료하고 진짜 훈련하러 가기 GO!GO!</button>
            </article>
        </div>
    )
}