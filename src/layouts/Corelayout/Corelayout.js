import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import '../../styles/core.scss';

export const Corelayout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            {children}
        </React.Fragment>
    );
};

export default Corelayout;