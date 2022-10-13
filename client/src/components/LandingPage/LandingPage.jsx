import React from 'react';
import { Link } from 'react-router-dom';
import "./LandingPage.css"

export default function LandingPage(){
    return (
        <div className="container">
            <h1>Este es el Landing Page</h1>
            <Link to={'/home'}>
                <button>Comienza tu PokeAventura!</button>
            </Link>
        </div>
    )
}
