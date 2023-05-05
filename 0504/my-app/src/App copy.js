import './App.css';
import Menu from './components/menu/Menu'
import NewMenu from './components/newMenu/NewMenu'
import TextArea from './components/textArea/TextArea'
import Trip from './components/trip/Trip'

const name = "JAY 🐥"
// const 변수 = 'value!'
// const 값 = true;
// function 함수() {
//   console.log('함수함수!');
// }
const someStyle = { backgroundColor: "gray", color: "white" };
const year = new Intl.DateTimeFormat('ko', { dateStyle: 'medium' }).format(new Date())

function App() {
  return (
    <div>
      <NewMenu />
      <Menu />
      {/* {100 + 1}
      {'hello' + 'world'}
      {[1, 2, 3].map(x => x ** 2)}
      {함수()}
      {변수}
      {값 ? 'one' : 'two'} */}
      <TextArea />
      <h1 hello="hi" style={someStyle}>안녕 {name} !!</h1>
      <h2 style={{}}>React JSX 문법 아직 어렵지만 곧 익숙해질 거야</h2>
      <p style={{ color: "red" }}>년 : {year}</p>
      <p>월/일 : </p>
      <p>시간 : </p>

      <div>
        <h2>방문한 지역</h2>
        <Trip />
      </div>
    </div>
  );
}

export default App;
