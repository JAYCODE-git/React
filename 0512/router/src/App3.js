import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Link to="/"> home </Link>
            <Link to="/one"> one </Link>
            <Link to="/two"> two </Link>
            <Link to="/three"> three </Link>
            <Link to="/blog/1"> four_1 </Link>
            <Link to="/blog/2"> four_2 </Link>
            <Link to="/blog/3"> four_3 </Link>
            {/* 라우트를 감싸줍니다. */}
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/one" element={<One name='JAY' />} />
                <Route path="/two" element={<Two />} />
                <Route path="/three" element={<Three />} />
                {/* :id를 통해 동적라우팅 URL 패턴 구현 */}
                <Route path="/blog/:id" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    );
}

function Index() {
    return <h1>hello world0</h1>
}

function One({ name }) {
    return <h1>{name} world1</h1>
}

function Two() {
    return <h1>hello world2</h1>
}

function Three() {
    return <h1>hello world3</h1>
}

function Blog() {
    const { id } = useParams();
    console.log(id);

    // const location = useLocation();
    // console.log(location)
    // const path = location.pathname.split('/')[2]
    // console.log(path);
    return <h1>hello Blog {id}</h1>
}

export default App;