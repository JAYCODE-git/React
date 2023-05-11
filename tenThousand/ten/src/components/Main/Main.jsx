import React from 'react'
import './Main.css'
import title from '../../img/title.png'

export default function Main() {
    return (
        <article className="main">
            <h1><img src={title} alt="1만 시간의 법칙" /></h1>
            <h2>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</h2>
            <p className="Info">
                <strong>1만 시간의 법칙</strong>은<br />
                어떤 분야의 전문가가 되기 위해서는<br />
                최소한 1만 시간의 훈련이 필요하다는 법칙이다.
            </p>
        </article>
    )
}
