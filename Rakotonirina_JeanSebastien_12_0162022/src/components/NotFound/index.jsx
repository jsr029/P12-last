import React from 'react'
import { Link } from 'react-router-dom';

/**
 * Displays error 404 page with a link to home page
 */
function NotFound(){
        return (
        <div className='error'>
            <h1>Oups la page demandée n'existe pas !</h1>
            <p>Serveur introuvable, impossible de charger les données.</p>
            <p><Link to='/'>Retour à l"Accueil</Link></p>
        </div>
    );
};

export default NotFound