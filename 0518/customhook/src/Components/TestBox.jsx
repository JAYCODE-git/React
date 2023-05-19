import React from 'react'
import { useMouseLocation } from '../Hooks/useMouseLocation';

export const TestBox = () => {

    const { x, y } = useMouseLocation();

    return (
        <div style={{
            width: 100,
            height: 100,
            backgroundColor:
                x > 200 && y > 200 ? 'khaki' : 'royalblue'
            // backgroundColor: location ?
            //     'khaki'
        }}>
            TestBox
        </div>
    )
}