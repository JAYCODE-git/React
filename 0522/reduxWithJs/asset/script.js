
function reducer(state, action) {
    console.log(state, action)
    if (state === undefined) {
        return {
            text: 'hello',
            color: 'black',
            border: '5px solid dodgerblue',
            borderRadius: '0'
        }
    } else if (action.type === 'TEXT') {
        return {
            ...state, text: action.text
        }
    } else if (action.type === 'STYLE_BORDER') {
        return {
            ...state, borderRadius: action.borderRadius
        }
    } else if (action.type === 'STYLE_BORDER_COLOR') {
        return {
            ...state, border: action.border
        }
    }
}

const store = Redux.createStore(reducer);


// store는 데이터를 통합적으로 관리하기 위해서 단 하나만 존재!
//subscribe는 store의 데이터가 변경될 때마다 갱신되는 함수를 등록!
const item1 = () => {
    const state = store.getState();
    console.log(state)
    const $item = document.querySelector('#item1');
    $item.textContent = `${state.text}`;
    $item.style.borderRadius = `${state.borderRadius}`;
    $item.style.border = `${state.border}`;
}
store.subscribe(item1);
item1();


const item2 = () => {
    const state = store.getState();
    console.log(state)
    const $item = document.querySelector('#item2');
    $item.textContent = `${state.text}`;
    $item.style.borderRadius = `${state.borderRadius}`;
    $item.style.border = `${state.border}`;
}
store.subscribe(item2);
item2();


const item3 = () => {
    const state = store.getState();
    console.log(state)
    const $item = document.querySelector('#item3');
    $item.textContent = `${state.text}`;
    $item.style.borderRadius = `${state.borderRadius}`;
    $item.style.border = `${state.border}`;
}
store.subscribe(item3);
item3();

const item4 = () => {
    const state = store.getState();
    console.log(state)
    const $item = document.querySelector('#item4');
    $item.textContent = `${state.text}`;
    $item.style.borderRadius = `${state.borderRadius}`;
    $item.style.border = `${state.border}`;
}
store.subscribe(item4);
item4();

const item5 = () => {
    const state = store.getState();
    console.log(state)
    const $item = document.querySelector('#item5');
    $item.textContent = `${state.text}`;
    $item.style.borderRadius = `${state.borderRadius}`;
    $item.style.border = `${state.border}`;
}
store.subscribe(item5);
item5();

const item6 = () => {
    const state = store.getState();
    console.log(state)
    const $item = document.querySelector('#item6');
    $item.textContent = `${state.text}`;
    $item.style.borderRadius = `${state.borderRadius}`;
    $item.style.border = `${state.border}`;
}
store.subscribe(item6);
item6();