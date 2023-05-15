import { useState, useEffect, useRef } from "react";

export default function HookRef() {
    const [num2, setNum2] = useState(0);
    let num = useRef(0);

    return (
        <>
            {/* num값은 변하지만 useState실행이 되지 않기 때문에 useRef로 값을 기억해두고 화면이 다시 그려질 때 변경된 값을 화면에 표시 */}
            <button
                onClick={() => {
                    num.current++;
                    console.log(num.current);
                }}>
                num1 추가
            </button>
            <p>num1 : {num.current}</p>
            <hr />
            {/* state를 수정하는 setNum2함수를 실행해서 화면을 다시 그리는 작업 실행. */}
            <button onClick={() => { setNum2(num2 + 1) }}>num2 추가</button>
            <p>num2 : {num2}</p>
        </>
    )
}
