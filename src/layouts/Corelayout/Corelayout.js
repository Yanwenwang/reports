import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../../components/Home/Home';
import '../../styles/core.scss';

export const Corelayout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <Home />
        </React.Fragment>
    );
};

export default Corelayout;