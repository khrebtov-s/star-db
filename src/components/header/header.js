import React from 'react';

const Header = () => {
    return (
        <div className="nav" align="center">
            <span className ="d-flex">
                <div className="logo">
                    <a href="#">
                    StarDB
                    </a>
                </div>
                
                <ul>
                    <li><a href="href">Peoples</a></li>
                    <li><a href="href">Planets</a></li>
                    <li><a href="href">Starship</a></li>
                </ul>
            </span>
        </div>
    );
};

export default Header;