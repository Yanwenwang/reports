import React from 'react';
import './Navbar.scss';

export const Navbar = () => {
    return (
        <div className="nav__outer-container">
            <nav className="nav__container">
                <h4 className="nav__title">Reports</h4>
                <i className="nav__circle fa fa-circle" aria-hidden="true"></i>
                <ul className="nav__list">
                    <li className="nav__item">Home</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;