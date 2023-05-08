// import React 구문을 사용하면, React.createElement()를 사용하지 않고도 JSX를 사용할 수 있습니다.
import React, { Fragment } from 'react';
import './FragmentTest.css';

const list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function MyComponent() {
  return (
    // list.map((no, area, visited) => {
    list.map((list) => {
      return (
        <Fragment key={list.no}>
          <h1>Fragment</h1>
          <p>{list.no}</p>
          <p>{list.area}</p>
          <p>{list.visited ? '방문함' : '방문 안함'}</p>
        </Fragment>
      )
    })
  );
}



function ItemList() {
  const itemList = items.map(({ id, name, desc }) => {
    return (
      <Fragment key={id}>
        <dt>{name}</dt>
        <dd>{desc}</dd>
      </Fragment>
    )
  })

  return (
    <dl>
      {itemList}
    </dl>
  )
}

function App() {
  return (
    <div>
      <h1>안녕, 라이캣 1호!</h1>
      <h2>안녕, 라이캣 2호!</h2>
      <ItemList />
      <MyComponent />
    </div>
  );
}
export default App;
