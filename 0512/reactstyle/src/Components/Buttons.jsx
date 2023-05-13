import styled from "styled-components";

const Btn1 = styled.button`
    background-color: #ff0;
    font-size:2rem;
    border:4px solid #000;
    margin: 1rem;
    `

const Btn2 = styled(Btn1)`
    background-color: #000;
    border-color:#ff0;
    color: white;
    `

const Btn3 = styled(Btn1)`
    font-size: 1rem;
    border-radius: 2rem;
    padding: 4px 16px;
    `
const Btn4 = styled(Btn3)`
    font-size: 1rem;
    background:#fff;
    border-radius: 2rem;
    `

export { Btn1, Btn2, Btn3, Btn4 };