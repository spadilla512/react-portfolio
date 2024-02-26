import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

export default function Header ({ currentPage, setCurrentPage }) {
    return (
        <div className="header" style={{ padding: "0px 0px 10px 30px" }}>
            <p id="header-name">Sarah Padilla</p>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}