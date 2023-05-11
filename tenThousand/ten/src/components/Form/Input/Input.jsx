import React from 'react'
import './Input.css'

export default function Input({ hours, setHours, technique, setTechnique }) {
    const userInputs = (e) => {
        const value = e.target.value;
        if (e.target.dataset.type === 'hours') {
            value < 1 || value > 24 || isNaN(value) ? window.alert('🚫 시간을 다시 입력해주세요.') : setHours(value)
        } else {
            setTechnique(value)
        }
    }

    return (
        <article className="input-area">
            <h3 className='a11y-hidden'>훈련내용 작성</h3>
            <p>
                나는
                <input
                    type="text"
                    onChange={userInputs}
                    value={technique}
                    data-type="technique"
                    placeholder='예)프로그래밍'
                />
                전문가가 될 것이다.
            </p>
            <p>
                그래서 앞으로 매일 하루에
                <input
                    type="text"
                    onChange={userInputs}
                    value={hours}
                    data-type="hours"
                    placeholder='예)5'
                />
                시간씩 훈련할 것이다.
            </p>
            <button type="submit" className="btn-primary"> 나는 며칠 동안 훈련을 해야 1만 시간이 될까 ?</button>
        </article>
    )
}
