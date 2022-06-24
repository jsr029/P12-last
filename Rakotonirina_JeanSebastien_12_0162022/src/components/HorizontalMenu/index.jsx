import React from 'react'
import { NavLink } from 'react-router-dom';

/**
  * Displays the horizontal menu 
  * 
  * Logo, Accueil, Profil, Réglage, Communauté
  * @returns { Html } menu
 */
function HorizontalMenu() {
    return (
		<ul className='navBar'>
			<li>
				<NavLink to='/'>
					<img src='http://127.0.0.1:3000/sportSeeLogo1.png' alt='Logo SportSee' />
				</NavLink> 
				<span className='soprtSee-header-title'> SportSee
				</span>
			</li>
			<li><NavLink to="/">Accueil</NavLink></li>
			<li><NavLink to="#">Profil</NavLink></li>
			<li><NavLink to="#">Réglage</NavLink></li>
			<li><NavLink to="#">Communauté</NavLink></li>
		</ul>
    );
};

export default HorizontalMenu;