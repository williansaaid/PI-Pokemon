import React from 'react';
import { Link } from 'react-router-dom';
import "./LandingPage.css"

export default function LandingPage(){
    return (
        <div className="containerLanding">
            <div className='infoContainer'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon logo" id="logoLanding"/>
                <h1 id='header'>Welcome to the Pokémon World!</h1>
                <p id='intro'>Here you will find data of all the Pokémons, and if you want, Create One of these powerful creatures!</p>
                <Link to={'/home'}>
                    <button id='buttonStart'>Begin your Journey Now!</button>
                </Link>
            </div>
            <div id='cont'></div>
        </div>
    )
}
