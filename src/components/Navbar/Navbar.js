import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
    return (
        <div className="nav__outer-container">
            <nav className="nav__container">
                <h4 className="nav__title">Reports</h4>
                <i className="nav__circle fa fa-circle" aria-hidden="true"></i>
                <ul className="nav__list">
                    <li>
                        <Link to="/" className="nav__item">Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;