import React from 'react';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <img src={logo} alt='' className='logo'></img>
            <h1>Kwestionariusz do udziału w kursie</h1>
        </div>
    )
}

export default Header;