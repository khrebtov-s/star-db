import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onServiceChange }) => {
    return (
        <div className="nav" align="center">
            <div className="bg-color">
                <span className="d-flex">
                    <div className="logo">
                        <Link to="/"><h3>StarDB</h3></Link>
                    </div>
                    <ul>
                        <li><Link to="/people">Peoples</Link></li>
                        <li><Link to="/planets">Planets</Link></li>
                        <li><Link to="/starships">Starship</Link></li>
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