import React from 'react';
import './SecondaryNavbar.scss';

export const SecondaryNavbar = ({ children }) => {
    return (
        <div className="secondarynav__container">{children}</div>
    );
};

export default SecondaryNavbar;