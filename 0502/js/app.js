

// * 환경변수
const SHOP_URL = 'http://test.api.weniv.co.kr/mall'





// * api 데이터 받아오는 함수
// fetch는 비동기 통신이기 때문에 동기적으로 코드를 작성하면 안됨
// getData() 함수에 async 키워드를 붙여서 비동기적으로 작성해야함.
// 이 후 실행되는 getData() 함수는 await 키워드를 붙여서 비동기적으로 작성된 코드가 실행되기를 기다림.
async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('네트워크에 문제가 있습니다.')
        }
        return response.json();
    } catch (error) {
        console.log('삐용삐용삐용');
    }
}



// * 상품 데이터 받아오는 함수
(async function shopFeed() {
    const getFeed = await getData(SHOP_URL);
    console.log(getFeed)
    // console.log(...getFeed)
    // console.log(getFeed[0])
    // console.log(getFeed[0].price)
})()
console.log(getFeed)

// 카드 컴포넌트
const Card = function (props) {
    console.log(props)
    return (
        <article>
            {/* <h2>{props.getFeed.thumbnailImg}</h2>
            <p>{props.getFeed.price}</p>
            <p>{props.getFeed.productName}</p> */}
        </article>
    )
}
// productName
// thumbnailImg
// price

// 상품 리스트
const Product = function (props) {
    console.log(props);
    <Card item={props} />
}


// JSX에서 코드의 개행이 필요할 경우 소괄호를 사용하여 묶습니다.
const body =
    (
        <section>
            <h1>SHOP</h1>
            <Product item={getFeed} />
        </section>
    )



// * 랜더링 함수

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(body);
