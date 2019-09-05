import React from 'react';
import icon from './error-icons.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error image" className="error-indicator-icon"/>
            <span className="error-indicator-title">
                <h1>OOPS!</h1>
            </span>
            <span className="error-indicator-text">
                <h3>something has gone terribly wrong</h3>
            </span>
        </div>
    ) 
}

export default ErrorIndicator;