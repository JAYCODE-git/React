import React from 'react'
import { useState } from 'react';

export default function Product() {
    const [datas, setDatas] = useState([
        {
            title: "개발자 무릎 담요",
            price: 17500,
            id: 101,
        },
        {
            title: "Hack Your Life 개발자 노트북 파우치",
            price: 29000,
            id: 102,
        },
        {
            title: "우당탕탕 라이켓의 실험실 스티커북",
            price: 29000,
            id: 103,
        },
        {
            title: "버그를 Java라 버그잡는 개리씨 키링",
            price: 29000,
            id: 104,
        },
    ]);

    // React는 State 함수 호출의 일관성을 유지하기 위해서 내부적으로 동일한 내용의 State함수 호출이 여러번 반복되면 하나의 업데이트로 취급하여 처리한다.
    const deleteData = (id) => {
        // DOM을 통한 삭제 방법은 지양하고, 리액트에서 데이터를 상태 관리하고 삭제하는 방법을 사용해야 한다.
        // e.target.closest('div').remove();

        // setDatas(
        //     datas.filter((data) => {
        //         return data.id !== id;
        //     })
        // );

        // 함수형 업데이트라고 표현합니다. 함수형 업데이트를 사용하면 함수의 인자로 전달되는 state 값을 React가 이전 state의 값으로 보장합니다.
        // 상태 업데이트가 비동기적으로 처리된다고 해도 안정적으로 이전 값과 이후 값(버츄얼 돔)을 비겨하여 처리할 수 있습니다.
        setDatas((func) => {
            return func.filter((data) => {
                // button의 id와 data의 id가 같지 않은 것만 남겨서 새로운 배열을 만든다.
                return data.id !== id;
            })
        }
        );

    }

    return (
        datas.map(({ id, title, price }) => {
            return (
                <div id={id} key={id}>
                    <h2>{title}</h2>
                    <p>{price}</p>
                    {/* 버튼에 arguments를 넘겨주기 위해서는 함수를 새로 만들어서 외부로 넘겨줘야 한다. */}
                    <button onClick={() => { deleteData(id) }}>삭제</button>
                </div>
            )
        })
    )
}
