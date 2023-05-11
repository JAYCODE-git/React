import React from 'react'
import './Result.css'

export default function Result({ modal, resultData }) {

    const setResultData = [
        { id: 1, msg01: '당신은', msg02: '전문가가 되기 위해서' },
        { id: 2, msg01: '대략', msg02: '일 이상 훈련하셔야 합니다! :)' }
    ]
    const inputData = [resultData[0], Math.ceil(10000 / resultData[1])]
    console.log(resultData)
    return (
        <article className='result'>
            {setResultData.map(({ id, msg01, msg02 }) => {
                return (
                    <p key={id}>
                        {msg01}
                        <strong>
                            {inputData[id - 1]}
                        </strong>
                        {msg02}
                    </p>
                )
            })}

            <button onClick={modal} type="button" value="close" className="show-dialog btn-primary">훈련하러 가기 GO!GO!</button>
            <button type="button">공유하기</button>
        </article>
    )
}
