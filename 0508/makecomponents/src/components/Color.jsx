import React from 'react'
import './Color.css'
const colors = ['blue', 'green', 'yellow']

export default function Color() {
    return (
        colors.map(v => {
            return (
                <div key={v.length} className={v}>컬러가 바뀌어요</div>
            )
        })
    )
}
