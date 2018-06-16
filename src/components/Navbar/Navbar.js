import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import './Navbar.scss';

const HomeLink = () => (
    <li>
        <NavLink to="/" className="nav__item" activeClassName="nav__item--active" exact>Home</NavLink>
    </li>
);

const ListLink = () => (
    <li>
        <i className="nav__arrow fa fa-angle-right" aria-hidden="true"></i>
        <NavLink to="/lists?status=all" className="nav__item" activeClassName="nav__item--active" exact>Lists</NavLink>      
    </li>
);

const ReportLink = () => (
    <li>
        <i className="nav__arrow fa fa-angle-right" aria-hidden="true"></i>
        <NavLink to="/lists/report" className="nav__item" activeClassName="nav__item--active" exact>Report</NavLink>
    </li>
);

export const Navbar = () => {
    return (
        <div className="nav__outer-container">
            <nav className="nav__container">
                <h4 className="nav__title">Reports</h4>
                <i className="nav__circle fa fa-circle" aria-hidden="true"></i>
                <ul className="nav__list">
                    <Route path="/" component={HomeLink} />
                    <Route path="/lists" component={ListLink} />
                    <Route path="/lists/report" component={ReportLink} />
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;