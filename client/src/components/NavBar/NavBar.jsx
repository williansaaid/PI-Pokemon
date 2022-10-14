import React from "react";
import Filter from "../Filter/Filter"
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to={"/"}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon logo" id="logo"/>
            </Link>
            <div id="searchAndFilter">
                <div className="search">
                    <input type={"text"} placeholder="Search..." id="inputText"/>
                    <button id="searchButton"><img src="https://www.flaticon.es/svg/vstatic/svg/3917/3917132.svg?token=exp=1665695327~hmac=7a0cb589fe508f011419ce281ace0b7b" alt="search icon" id="searchIcon"/></button>
                </div>
                <Filter/>
            </div>
            <div id="refreshAndCreate">
                <button id="refresh"><img id="refreshIcon" src="https://www.flaticon.es/svg/vstatic/svg/3917/3917293.svg?token=exp=1665695688~hmac=f130a03f822eebad3a86f64699945c05" alt="refresh"/></button>
                <Link to={"/create"} id="link">
                    <div id="create">
                        <img id="createIcon" src="https://cdn-icons.flaticon.com/svg/3917/3917757.svg?token=exp=1665694592~hmac=9ce45c064925fde6d432c0dc20be7a08" alt="create icon"/>
                        <p>CREATE POKEMON</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;