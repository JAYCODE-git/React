import { useState, useMemo } from 'react'

function 부하() {
    let zero = 0
    for (let i = 0; i < 1000000000; i++) {
        zero += i
    }
    return zero
}

export default function HookUseMemo() {
    const [count, setCount] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const handleCountUp = (e) => {
        setCount(count + 1)
        console.log(count)
    }
    const handleCountUpTwo = (e) => {
        setCountTwo(countTwo + 1)
        console.log(countTwo)
    }

    console.log('랜더링!!')

    // useMemo를 사용하면, countTwo가 바뀔 때만 부하()를 실행한다.
    const result = useMemo(() => {
        return 부하()
        // countTwo가 바뀔 때만 부하()를 실행시켜서 result에 저장한다.
        // 나머지 경우는 이전에 저장된 result를 사용하고 부하()를 실행하지 않는다.
    }, [countTwo])

    return (
        <div className="App">
            <h1>계산 결과 : {result}</h1>
            <div>{count}</div>
            <button onClick={handleCountUp}>up!</button>
            <div>{countTwo}</div>
            <button onClick={handleCountUpTwo}>up!</button>
        </div>
    );
}

