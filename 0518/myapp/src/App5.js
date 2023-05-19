import React, { useState } from 'react';
import InputComponent from './Components/InputComponent';
import SomethingComponent from './Components/SomethingComponent';

export default function App5() {
    const [value, setValue] = useState('');
    function onChange(e) {
        setValue(e.target.value);
    }
    return (
        <>
            <InputComponent />
            <SomethingComponent />
        </>
    )
}