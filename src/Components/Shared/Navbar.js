import {faAngleDown, faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Navbar.css';
import logo from "../../images/logo.png";

const Navbar = () => {
    return (
        <div className='navbar'>
           <div>
           <img className='logo' src={logo} alt="" />
        </div>
        <div className='nav-second-part'>
            <p className='option'>My Assignment</p>
            <p className='option'>Chat With Mentor</p>
            <p className='profile-div'>
                <span><FontAwesomeIcon className='user-icon' icon={faUser}> </FontAwesomeIcon></span> 
                <span className='profile'>ProfileName </span>
                <span className='down-icon'><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></span></p>
        </div>
        </div>
    );
};

export default Navbar;