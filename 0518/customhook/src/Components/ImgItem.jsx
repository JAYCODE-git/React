import React from 'react'

export const ImgItem = ({ item }) => {
    return (
        <img
            src={item.download_url}
            alt="item.author"
            style={{ width: 400 }}
        />
    )
}
