// SSR에서 import와 동일한 문법 'require' // commonJS 문법
const express = require('express');
const app = express();
const react = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./components/Home.js').default;

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

// server를 3000번 포트로 실행
app.listen(3000, () => {
  console.log('👍 3000번 포트가 열렸습니다');
});

// client에서는 index.js를 실행하면서 Home.js를 import하고 있음
// server에서는 Home.js를 import하고 있지 않음
// 그래서 Home.js를 import하려면 require를 사용해야 함
// 그리고 Home.js를 import하면 Home.js의 default export를 사용할 수 있음
// 그래서 Home.js의 default export를 사용하기 위해 .default를 붙여줌
// 그리고 Home.js의 default export는 Home이라는 함수이므로 Home()을 사용해야 함
// 그리고 Home()은 JSX를 리턴하므로 JSX를 사용하기 위해 JSX 문법을 사용함
// 그리고 JSX 문법을 사용하기 위해 react를 import함
// 그리고 JSX 문법을 사용하기 위해 renderToString을 사용함
// 그리고 renderToString은 JSX를 문자열로 변환해줌
// 그리고 문자열로 변환된 JSX를 content라는 변수에 저장함
// 그리고 content를 res.send()로 보내줌
// 그리고 client에서는 index.js를 실행하면서 Home.js를 import하고 있음
// 그리고 Home.js를 import하면서 Home.js의 default export를 사용할 수 있음