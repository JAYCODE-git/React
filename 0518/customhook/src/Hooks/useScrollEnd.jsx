
import { useEffect, useState } from 'react'

export const useScrollEnd = (iniState) => {
    const [isBottom, setIsBottom] = useState(iniState || false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            // *scrollTop: 스크롤이 있는 영역의 최상단 위치
            // window.innerHeight: 사용자가 보고 있는 화면의 높이

            // *두 메서드를 더해서 사용자가 스크롤을 끝까지 내렸을 때, 새로운 데이터를 불러오는 이벤트를 만든다.
            // console.log(document.documentElement.scrollTop + window.innerHeight)

            // *사용자가 스크롤을 끝까지 내렸을 때, 새로운 데이터를 불러오는 이벤트.
            // console.log(document.documentElement.offsetHeight)

            // *스크롤이 끝까지 내려갔을 때, setIsBottom을 true로 바꾼다.
            setIsBottom(document.documentElement.scrollTop + window.innerHeight + 3 >= document.documentElement.offsetHeight);
        });
    }, []);

    // *customHook 사용을 위해 isBottom을 반환
    return isBottom;
}
