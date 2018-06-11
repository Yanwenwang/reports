import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SecondaryNavbar from '../../components/SecondaryNavbar/SecondaryNavbar';
import Home from '../../components/Home/Home';
import '../../styles/core.scss';

export const Corelayout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <SecondaryNavbar />
            {children}
        </React.Fragment>
    );
};

export default Corelayout;