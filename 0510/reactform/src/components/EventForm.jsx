import React from 'react'
import './EventForm.css'
import { useState } from 'react';

export default function EventForm({ addData }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [fruit, setFruit] = useState('🍑 Peach');

    const resetForm = () => {
        setTitle('');
        setDate('');
        setFruit('🍑 Peach');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            id: Math.floor(Math.random() * 10000),
            title: title,
            date: date,
            fruit: fruit,
        }
        addData(formData);
        resetForm();
    }


    return (
        <form className='event-form' onSubmit={handleSubmit}>
            <label htmlFor="text">
                <strong>Event Title : </strong>
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
            </label>
            <label htmlFor="date">
                <strong>Event Date : </strong>
                <input type="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
            </label>
            <label htmlFor="select">
                <select onChange={(e) => { setFruit(e.target.value) }}>
                    <option value="🍑 Peach">🍑 Peach</option>
                    <option value="🍓 Strawberry">🍓 Strawberry</option>
                    <option value="🍒 Cherry">🍒 Cherry</option>
                </select>
            </label>
            <button type='submit'>제출하기</button>
            <button type='reset' onClick={resetForm}>초기화</button>
        </form>
    )
}
