import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [fstRender, setRender] = useState(false);
    const handleCountUp = (e) => {
        setCount(count + 1);
    };
    useEffect(() => {
        setRender(true);
        if (fstRender) {
            // effect를 실행할 조건은 이거예요!
            if (count % 2) {
                console.log("홀수입니다")
            } else {
                console.log("짝수입니다")
            }
        }
        // clean-up 함수 : effect를 실행할 때마다 먼저 clean-up 함수가 실행된다.
        return () => {
            console.log('시작한다!');
        };
        // [의존성 배열] effect를 실행하려면 너가 있어야 해!
    }, [count])



    return (
        <>
            <div>{count}</div>
            <button onClick={handleCountUp}>Up!</button>
        </>
    );
}

export default Counter;
