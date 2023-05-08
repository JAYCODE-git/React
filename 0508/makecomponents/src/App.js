
import Time from './components/Time';
import Hello from './components/Hello';
import Resume from './components/Resume';
import Color from './components/Color';


function HelloProps(props) {
  return (
    <div>
      <p>my name is {props.name} and age is {props.age}</p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  )
}

function App() {
  return (
    <div>
      <Hello name="JAY 🐥" />
      <Resume />
      <Color />
      <Time />
      <HelloProps
        name="Jay"
        age={25}
        someFunc={() => 'awesome!!!'}
        someJSX={<img src="https://picsum.photos/id/237/200/300" alt="test" />}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }} />
    </div>
  );
}

export default App;
