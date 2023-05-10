// import MyList from './components/MyList';
// import Product from './components/Product';
// import Count from './components/Count';
import NavBar from './components/NavBar';

function Hello(props) {
  const name = props.name;
  if (name) {
    return <One name={name} />
  } else {
    return <Two />
  }
}

function One(props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

function Two(props) {
  return (
    <div>
      <h1>name이 입력된 것이 없습니다.</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Hello name={'jay'} />
      <NavBar />
      {/* <MyList />
      <Count />
      <Product /> */}
    </div>
  );
}
export default App;
