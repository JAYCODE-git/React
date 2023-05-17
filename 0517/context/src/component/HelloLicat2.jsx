import React from 'react'

export default function HelloLicat2({ JayInfo }) {
    return (
        <JayInfo.Consumer>
            {/* context에 있는 데이터가 자동으로 콜백함수로 들어감 */}
            {(value) => {
                return (
                    <div>
                        <h2>{value.name}</h2>
                        <p>{value.speak}</p>
                    </div>
                )
            }}
        </JayInfo.Consumer>
    )
};