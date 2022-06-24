import React from 'react'
import { NavLink } from 'react-router-dom'

/**
 * Displays the vertical menu  
 * 
 * 4 Icons images
 * @returns { Html } icons image menu
 */
function VerticalMenu() {
    return (
        <ul className='vertical-nav'>
            <li><NavLink to="#"><img src='http://127.0.0.1:3000/img/yoga1.png' alt='' /></NavLink></li>
            <li><NavLink to="#"><img src='http://127.0.0.1:3000/img/swim1.png' alt='' /></NavLink></li>
            <li><NavLink to="#"><img src='http://127.0.0.1:3000/img/cycle1.png' alt='' /></NavLink></li>
            <li><NavLink to="#"><img src='http://127.0.0.1:3000/img/muscle1.png' alt='' /></NavLink></li>
        </ul>
);
};

export default VerticalMenu;