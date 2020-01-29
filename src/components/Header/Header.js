import React from 'react';
import a from './Header.module.css';

// как работают названия классов в css модулях
let classes = {
    'header': 'Header_header__2zYJg',  // изначальное простое название класса:
    'logo': 'Header_logo__3qQ0a',      // новое, сложное и уникальное название,
}                                      // которое генерирует браузер

const Header = () => {
    return (
        <header className={a.header}>
            <div className={a.logo}>
                <img src="https://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png"></img>
            </div> 
        </header>
    ); 
};

export default Header;