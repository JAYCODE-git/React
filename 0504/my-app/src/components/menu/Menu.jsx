import React from 'react';
import styled from './Menu.module.css';

const Menu = () => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li className={styled.red}>🍎 Apple</li>
                <li>🍌 Banana</li>
                <li>🍊 Orange</li>
            </ul>
        </div>
    );
};

export default Menu;