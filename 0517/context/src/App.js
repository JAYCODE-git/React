import { createContext } from 'react'
import HelloLicat2 from './component/HelloLicat2';

// UserInfo component에 context생성
const CatInfo = createContext({ name: "soi", speak: "🐈‍⬛ Miao" });
const JayInfo = createContext({ name: "Jay", speak: "🙋🏻‍♀️ Hola" });

const App = () => {
  return (
    <>
      <HelloLicat />
      <hr />
      <HelloLicat2 JayInfo={JayInfo} />
    </>
  );
};

const HelloLicat = () => {
  console.log()
  return (
    <CatInfo.Consumer>
      {/* context에 있는 데이터가 자동으로 콜백함수로 들어감 */}
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <p>{value.speak}</p>
        </div>
      )
      }
    </CatInfo.Consumer >
  );
};

export default App;