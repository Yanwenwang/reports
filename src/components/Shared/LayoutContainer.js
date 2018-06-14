import React from 'react';
import './LayoutContainer.scss';

export const LayoutContainer = ({ children }) => {
    return (
        <div className="layout-container__container">{children}</div>
    );
};

export default LayoutContainer;