import React from 'react'
import './DisplayMood.css'

export default function DisplayMood(props) {
    return (
        <div className={'container'}>
            오늘 기분이 {props.mood ? props.mood : '...👀'}
        </div>
    )
}
