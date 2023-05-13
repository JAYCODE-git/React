import React from "react";
import styled from "styled-components";

const ContentOne = styled.div`
    margin: 40px;
`;

const ContentTwo = styled.div`
    color:red;
`;

// 태그를 따로 지정하진 않고 스타일만 따로 추가가 필요할 때.
const ContentThree = styled(ContentTwo)`
    border: 1px solid black;
`

const UniAfter = styled.div`
    &:after {
    content: "!!";
}`

function App() {
    return (
        <div>
            <ContentOne>hello world</ContentOne>
            <ContentOne>hello world</ContentOne>
            <ContentTwo>hello world</ContentTwo>
            <ContentThree>hello world</ContentThree>
            <UniAfter>hello world</UniAfter>
        </div>
    );
}

export default App;