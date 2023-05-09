import React from 'react'
import Myname from './Myname';

export default function Hompage({ setOpenModal, setLogin }) {
    const logout = () => {
        setLogin(false)
        setOpenModal(true);
    }

    return (
        <>
            <h1>환영합니다!</h1>
            <Myname name="JAY" />
            <button onClick={logout}>로그아웃</button>
        </>
    )
}