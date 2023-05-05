import React from 'react';
import styled from './List.module.css';

let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
]

const List = () => {
    let listProps = list.map((item, index) => {
        return (
            <li key={item.no} className={item.visited ? styled.active : ""}> {item.area}</li >
        )
    })
    return (
        <ul className={styled.noDesc}>{listProps}</ul>
    );
}

export default List;