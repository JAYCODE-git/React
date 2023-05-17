import React from 'react'
import { userInfo, AppConsumer } from '../AppConsumer'

export default function HelloLicat() {
    return (
        <userInfo.Consumer>
            {(value) => {
                return (
                    <div>
                        <h2>{value.name}</h2>
                        <p>{value.id}</p>
                    </div>
                )
            }}
        </userInfo.Consumer>
    )
}
