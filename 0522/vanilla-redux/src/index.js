import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';


// 여러개의 Reducer를 module폴더에 담아서 rootReducer 한개로 불러오기
const store = createStore(rootReducer);
console.log(store.getState());



const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <Provider store={store}>
        <App tab="home" />
    </Provider>
);