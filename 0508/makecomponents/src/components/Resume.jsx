import React, { useState } from 'react'

export default function Resume() {

    // like를 0으로 초기화하고, setLike를 만들어서 like를 1씩 증가시킨다.
    const [like, setLike] = useState(0);
    const [text, setText] = useState('like');
    const myself = {
        hello: "안녕하세요",
        name: "제이",
        hobby: "독서",
        food: "김밥",
        color: "노란",
    }
    function clickLike() {
        setLike(like + 1)
        text === 'like' ? setText('') : setText('like')
    }

    return (
        <article>
            <h2>{myself.hello}! {myself.name}입니다.</h2>
            <ul>
                <li>취미는 {myself.hobby}입니다.</li>
                <li>{myself.food}을 좋아합니다.</li>
                <li>{myself.color}색을 좋아합니다.</li>
            </ul>
            <button onClick={clickLike}>like <span>{like}</span></button>
            <p>{text}</p>
        </article>
    )
}
