import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='firstDiv'>
                <Link to={"/home"}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon logo" id="logo"/>
                </Link>
            </div>
            <div className='secondDiv'>
                <p>Made with 💙 by <a href='https://www.linkedin.com/in/williansaaid/' target="_blank" className='madeBy'>Willians Jimenez</a>
                </p>
            </div>
            <div className='thirdDiv'>
                <a className='github' href='https://github.com/williansaaid' target="_blank">Visit my GitHub</a>
            </div>
        </div>
    )
}

export default Footer