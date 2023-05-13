import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import styled from 'styled-components';

const StyledLink = styled(Link)`
        margin:8px 4px;
        display:inline-block;
        border:1px solid #ccc;
        padding:8px 16px;
        border-radius:24px;
        text-decoration:none;
        color:#000;
            &:hover{
                background-color: #000;
                color: #fff;
                border: 1px solid transparent;
            }
        `

const Articles = styled.div`
        text-align: center;
            h1 {
                margin: 40px 0;
                font-size: 2rem;
                font-weight: bold;
                border-bottom: 2px solid #000;
                display: inline-block;
            }
            p {
                font-size: 1.25rem;
                color: ${(props) => (props.element === 'Notice' ? 'salmon' : '#777')}
            }
    `


export default function App5() {
    return (
        // BrowserRouter : UI와 URL을 연결. 마치 SSR과 같이 URL을 사용할 수 있게한다.
        <BrowserRouter>
            {/* Link to */}
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/products/1">Product Detail 1</StyledLink>
            <StyledLink to="/products/2">Product Detail 2</StyledLink>
            <StyledLink to="/products/3">Product Detail 3</StyledLink>
            <StyledLink to="/Products/1/notice">Product Detail1 Notice</StyledLink>
            <StyledLink to="/Products/2/notice">Product Detail2 Notice</StyledLink>
            <StyledLink to="/Products/3/notice">Product Detail3 Notice</StyledLink>
            <StyledLink to="/cart">Cart</StyledLink>
            <StyledLink to="/users/coupon">Coupon</StyledLink>
            <StyledLink to="/users/question">Question</StyledLink>
            <StyledLink to="/users/notice">Notice</StyledLink>
            <StyledLink to="/users/">Users</StyledLink>

            {/* Routes : <Routes> 는 모든 자식 <Route> 를 살펴보고 가장 알맞는 것을 매칭. */}
            <Routes>
                {/* Route : 현재 URL과 매칭된 UI를 렌더링 하는 역할. */}
                <Route path='/' element={<Home />} ></Route>
                <Route path='/products/*' element={<Outlet />} >
                    <Route path=':id' element={<Products str='Detail' />} ></Route>
                    <Route path=':id/notice' element={<Products str='Notice' />} ></Route>
                </Route>
                <Route path='/cart' element={<Cart />} ></Route>
                <Route path='/users/*' element={<Outlet />} >
                    <Route path=':id' element={<Users str="🙋🏻‍♀️ JAY" />} ></Route>
                    <Route path='' element={<Users str="⚙️ User" />} ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const Home = () => {
    return (
        <Articles>
            <h1>Home</h1>
            <p>Welcome to My Home 🩵</p>
        </Articles>
    )
}

const Products = ({ str }) => {
    const { id } = useParams();
    return (
        <Articles element={str}>
            <h1>Product {str}</h1>
            <p> This page is {str} {id}</p>
        </Articles>
    )
}

const Cart = () => {
    return (
        <Articles>
            <h1>Cart</h1>
            <p> This page is Cart</p>
        </Articles>
    )
}

const Users = ({ str }) => {
    const { id } = useParams();
    return (
        <Articles>
            <h1>User</h1>
            <p> {str} {id}</p>
        </Articles>
    )
}
