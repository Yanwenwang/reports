import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SecondaryNavbar from '../../components/SecondaryNavbar/SecondaryNavbar';
import './Corelayout.scss';
import '../../styles/core.scss';

export const Corelayout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <SecondaryNavbar />
            <div className="corelayout__container">
                {children}
            </div>
        </React.Fragment>
    );
};

export default Corelayout;