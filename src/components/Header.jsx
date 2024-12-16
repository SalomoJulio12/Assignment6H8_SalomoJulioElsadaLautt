// components/Header.jsx
import React from 'react';
import Search from './Search';

function Header({ title, onSearch }) {
    return (
        <header className="bg-orange-600 p-4 flex justify-around items-center">
            <h1 className="text-white text-2xl font-bold">{title}</h1>
            <Search onSearch={onSearch} />
        </header>
    );
}

export default Header;