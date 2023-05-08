import React from 'react'
import MenuListItem from '../MenuListItem/MenuListItem'
import './MenuList.css'

export default function MenuList(props) {
    const emotions = [
        { id: 1, name: '최고🥳' },
        { id: 2, name: '좋아요🥰' },
        { id: 3, name: '그냥 그래요😕' },
        { id: 4, name: '별로에요🥵' }
    ]
    return (
        <ul className={'container-list'}>
            {
                emotions.map((item, index) => {
                    return (
                        < MenuListItem
                            key={item.id}
                            // 기분의 텍스트
                            mood={item.name}
                            // 현재 사용자의 기분이 맞는지 전달
                            isSelected={props.mood === item.name}
                            // 현재 기분을 변경하는 클릭 이벤트 전달 // = setCurrentMood
                            onClickEvt={props.onItemClick}
                        />
                    )
                })
            }
        </ul>
    )
}
