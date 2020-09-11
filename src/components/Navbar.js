import React from 'react';
import logo from "../assets/logo.png"
import SelectInput from '../common/SelectInput';
import {taskType} from "../Constants";
import Select from 'react-select';


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
                    {/* ANPP-DEV */}
                    <Select placeholder="select project" options={taskType} />
            </li>
                <li className="user-logo">
                    AA
            </li>
            </ul>

        </div>
    )
}

export default Navbar;