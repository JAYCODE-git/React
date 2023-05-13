import React from "react";
import styled, { css } from 'styled-components'
import { Btn1, Btn2, Btn3, Btn4 } from "./Components/Buttons";

const One = css`
  color: red;
`;

const Two = css`
  border: 1px solid black;
`;

const Three = styled.div`
  ${One}
  ${Two}
`


const App = () => {
    return (
        <>
            <Three>Lorem ipsum dolor</Three>
            <Btn1>🍕 Pizza</Btn1>
            <Btn2>🍔 Burger</Btn2>
            <Btn3>🍟 French Fries</Btn3>
            <Btn4>🥤 Cola</Btn4>
        </>
    );
};

export default App;