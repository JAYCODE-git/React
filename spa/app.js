
const container = document.querySelector('#root')

// * 환경변수
const NEWSLIST_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/$id.json'


// * 현재 사용자가 보고있는 페이지의 정보와 화면에 보여질 item의 개수를 저장하는 객체
// currentPage: 현재 사용자가 보고있는 페이지
// datasPerPage: 화면에 보여질 item의 개수
const store = {
    currentPage: 1,
    datasPerPage: 10,
}


// * api 데이터 받아오는 함수
// fetch는 비동기 통신이기 때문에 동기적으로 코드를 작성하면 안됨
// getData() 함수에 async 키워드를 붙여서 비동기적으로 작성해야함.
// 이 후 실행되는 getData() 함수는 await 키워드를 붙여서 비동기적으로 작성된 코드가 실행되기를 기다림.
async function getData(url) {
    // try catch 문으로 예외처리
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('네트워크에 문제가 있습니다.')
        }
        // json 형태로 변환하는 response.json() 함수
        return response.json();
    } catch (error) {
        console.log(error);
    }
}


// * 뉴스 리스트 페이지 구성 함수
async function newsFeed() {
    const newsFeed = await getData(NEWSLIST_URL);
    const newsList = [];
    const totalPages = Math.ceil(newsFeed.length / store.datasPerPage);

    // newsList에 컨텐츠를 push해서 넣어줌.
    newsList.push('<ul>');
    for (let i = (store.currentPage - 1) * store.datasPerPage; i < store.currentPage * store.datasPerPage; i++) {
        newsList.push(`
        <li>
            <a href="#/detail/${newsFeed[i].id}">
                ${newsFeed[i].title}
                (${newsFeed[i].comments_count})
            </a>
        </li >
        `)
    }
    newsList.push('</ul>');

    // pagination nav태그 push해서 넣어줌.
    let pagination = '';
    for (let i = 0; i < totalPages; i++) {
        pagination += `<li><a href='#/page/${i + 1}'>${i + 1}</a></li>`
    }

    newsList.push(`
        <nav>
            <ul>
                ${pagination}
            </ul>
        </nav>
    `);
    container.innerHTML = newsList.join('');
}


// * 뉴스 디테일 페이지 구성 함수
async function newsDetail() {
    const id = location.hash.slice(9);
    const newsContent = await getData(CONTENT_URL.replace('$id', id));

    container.innerHTML = `
        <h1>${newsContent.title}</h1>
        <div><a href='#/page/${store.currentPage}'>목록으로 돌아가기</a></div>
    `
}
// newsDetail();


// router : 화면을 중개하는 함수
function router() {
    const routePath = location.hash;

    if (routePath === '') {
        newsFeed();
    } else if (routePath.includes('#/page/')) { // 
        // 클릭했을 때 router() 함수가 실행되면서 store.currentPage 값이 바뀌고
        // 그 값에 따라서 newsFeed() 함수 실행.
        store.currentPage = routePath.slice(7)
        // console.log(parseInt(store.currentPage));
        newsFeed()
    }
    else {
        newsDetail();
    }
}

// hashchange 이벤트가 발생할 때마다 router() 함수 실행
window.addEventListener('hashchange', router);

// 페이지가 로드될 때마다 router() 함수 실행
router();