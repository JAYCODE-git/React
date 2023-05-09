import React from 'react'

export default function Myname({ name }) {
    const num = [1, 2, 3];

    // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
    const numComponentsArray = num.map((i) => <p>안녕, {name} {i}호</p>);

    return (
        <>
            {numComponentsArray}
        </>
    )
}


