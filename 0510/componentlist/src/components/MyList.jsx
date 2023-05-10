import React from 'react'

export default function MyList() {
    const items = [
        { id: 1, name: '🍕 Pizza' },
        { id: 2, name: '🍔 Burger' },
        { id: 4, name: '🥗 Salad' },
    ]
    const itemList = [];

    items.forEach(items => {
        itemList.push(<li key={items.id} > {items.name}</li>);
    })
    return (
        <ul>
            {itemList}
        </ul>
    )
}
