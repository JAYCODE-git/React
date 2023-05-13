import styled from "styled-components";

const SettingCard = () => {
    return (
        <>
            <button>초기화</button>
            <button>저장하기</button>
        </>
    );
};

const ShareCard = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
                eveniet, laudantium, deleniti autem sequi molestias magni quia, aliquam
                et praesentium nostrum dolores culpa cupiditate unde doloremque labore
                beatae accusamus.
            </p>
            <div>
                <button>이미지 저장</button>
                <button>트위터</button>
                <button>페이스북</button>
            </div>
        </>
    );
};


const CardDiv = styled.div`
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    margin-bottom: 20px;
    /* Card component의 className을 props로 받아서 조건식 실행 */
    width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
`;

const Card = (props) => {
    return (
        // CardDiv에 className을 props로 바로 전달
        <CardDiv className={props.className}>
            {/* Card Component의 vale를 props로 받아서 h3에 표기*/}
            <h3>{props.value}</h3>
            <hr />
            {/* Card Componenet의 자식 요소를 props로 받아서 합성 컴포넌트 적용 */}
            <div>{props.children}</div>
        </CardDiv>
    );
};



function App() {
    return (
        <>
            <Card className="setting" value="챌린지 설정">
                <SettingCard />
            </Card>
            <Card className="share" value="서비스 공유하기">
                <ShareCard />
            </Card>

        </>
    );
}

export default App;