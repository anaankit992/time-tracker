import React from 'react';
import logo from "../assets/logo.png"

// Main Nav Bar
function Navbar() {
    return (
        <div className="main-nav">
            {/* Navbar Options */}
            <ul>
                <li className="brand-logo">
                    <img src={logo} alt="brand-Logo" />
                </li>
                <li className="team-name">
                    ANPP-DEV
            </li>
                <li className="user-logo">
                    AA
            </li>
            </ul>

        </div>
    )
}

export default Navbar;