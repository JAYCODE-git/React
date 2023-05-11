import { useState } from 'react';
import React from 'react'
import Input from './Input/Input';
import Result from './Result/Result';
import Dialog from './Dialog/Dialog';
import './Form.css'

export default function Form() {
    // Modal을 표시하는 state
    const [openResult, setOpenResult] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const changeStateModal = () => {
        setOpenModal(!openModal);
    };

    // 사용자 입력 데이터를 저장할 state
    const [technique, setTechnique] = useState('');
    const [hours, setHours] = useState('');

    // 결과 데이터를 저장할 state
    const [resultData, setResultData] = useState([]);
    const getUserData = (e) => {
        e.preventDefault();
        setResultData([technique, hours])
        console.log(resultData)
        technique === '' || hours === '' ? window.alert('🚫 값을 입력해주세요!') : setOpenResult(true)
    }

    return (
        <form onSubmit={getUserData}>
            <Input technique={technique} hours={hours} setTechnique={setTechnique} setHours={setHours} />
            {openResult && <Result resultData={resultData} modal={changeStateModal} />}
            {openModal && <Dialog modal={changeStateModal} />}
        </form>
    )
}