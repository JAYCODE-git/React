import React, { useState, useRef } from "react";

function TryUseRef() {
    const [emailValue, setEmailValue] = useState("");
    const [pwValue, setPwValue] = useState("");

    // useRef를 사용하여 DOM에 접근
    const emailInput = useRef(null); // email input에 대한 useRef
    const pwInput = useRef(null); // pw input에 대한 useRef

    const inputCheck = (e) => {
        e.preventDefault();

        // email 입력 값이 공란일 때 예외처리
        if (emailInput.current.value === '') {
            alert('이메일을 입력하세요')
            emailInput.current.focus()
        }

        // email과 pw의 입력 값을 화면에 출력
        setEmailValue(emailInput.current.value);
        setPwValue(pwInput.current.value);
    };

    return (
        <form style={{ display: "flex", flexDirection: "column" }}>
            <label>
                이메일 : <input type="email" ref={emailInput} />
            </label>
            <label>
                비밀번호 : <input type="password" ref={pwInput} />
            </label>

            <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
                로그인
            </button>
            <span>입력한 이메일 : {emailValue}</span>
            <span>입력한 비밀번호 : {pwValue}</span>
        </form>
    );
}

export default TryUseRef;