import { useState, useEffect } from 'react';

// useMouseLocation() custom Hook을 통해 마우스의 x, y 좌표를 받아온다.
export const useMouseLocation = (iniVal) => {
    // mouseLocation을 감지하는 state
    // iniVal 값이 없다면 {x:0, y:0}으로 초기화
    const [mouseLocation, setMouseLocation] = useState(iniVal || { x: 0, y: 0 });

    // useEffect를 사용하여 마우스의 위치를 감지하고, mouseLocation state를 업데이트
    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            setMouseLocation({ x: e.x, y: e.y })
            return () => {
            };
        }, []);
    });

    // customHook 사용을 위해 mouseLocation을 반환
    return mouseLocation
}