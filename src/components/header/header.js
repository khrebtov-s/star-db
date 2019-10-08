import React from 'react';

const Header = ({ onServiceChange }) => {
    return (
        <div className="nav" align="center">
            <div className="bg-color">
                <span className="d-flex">
                    <div className="logo">
                        <h3>StarDB</h3>
                    </div>

                    <ul>
                        <li><a href="href">Peoples</a></li>
                        <li><a href="href">Planets</a></li>
                        <li><a href="href">Starship</a></li>
                        <li>
                            <button
                                onClick={onServiceChange}
                                className="btn btn-primary btn-sm">
                                Change Service
                             </button>
                        </li>
                    </ul>

                </span>
            </div>

        </div>
    );
};

export default Header;