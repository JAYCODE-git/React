import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
    width: min(100%, 400px);
    margin: 0 auto;
    text-align: center;
    h2 {
        font-size: 2rem;
        margin: 20px;
    }
    button {
        margin: 5px;
        background: none;
        border:1px solid #000;
        border-radius: 20px;
        padding: 8px 16px;
        font-size: 1.25rem;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            background: #000;
            color: #fff;;
        }
    } 
    ul{
        border-radius: 12px;
        padding: 10px 20px;
        display: flex;
        list-style: none;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        gap: 20px;
    }
    li {
        flex: 1 1 0;
        text-align: center;
        h3 {
            border-bottom: 1px dotted #000;
            padding: 12px;
        }
    }
    `

export default function NationList({ nations, setUrl }) {
    return (
        <Item>
            <h2>나라 목록</h2>
            <nav>
                <button onClick={() => { setUrl("http://localhost:3000/nations?loc=europe") }}>유럽 목록</button>
                <button onClick={() => { setUrl("http://localhost:3000/nations") }}>전체 목록</button>
            </nav>
            {nations.map(nation => {
                return (
                    <ul key={nation.id}>
                        <li>
                            <h3>나라 이름</h3>
                            <p>{nation.title}</p>
                        </li>
                        <li>
                            <h3>인구 수</h3>
                            {nation.population}
                        </li>
                    </ul>
                )
            })}
        </Item>
    )
}