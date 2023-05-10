import React from 'react'

export default function ItemGenerator({ datas }) {
    return (
        <div>
            {datas.map((data) => {
                return (
                    <div key={data.id}>
                        <h1>{data.title}</h1>
                        <h2>{data.date}</h2>
                        <h2>{data.fruit}</h2>
                    </div>
                )
            })}
        </div>
    )
}