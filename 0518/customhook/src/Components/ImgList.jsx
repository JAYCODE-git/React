import React from 'react'
import { ImgItem } from './ImgItem';

export const ImgList = ({ imgList }) => {

    return (
        <ul style={{ listStyle: 'none' }}>
            {imgList.map((item) => {
                return (
                    <li key={item.id}>
                        <ImgItem item={item} />
                    </li>
                )
            })}
            ....
        </ul>
    )
}
