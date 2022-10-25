import React from "react";
import Filter from "../Filter/Filter"
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ handleFilterType, handleReloadPage, handleFilterCreation, handleFilterAlphabetic, handleFilterAttack, handleFilterDefense, handleSearchInput, handleSearchButton }) => {

    return (
        <div className="navbar">
            <Link to={"/"}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon logo" id="logo"/>
            </Link>
            <div id="searchAndFilter">
                <div className="search">
                    <input type={"text"} placeholder="Search..." id="inputText" onChange={handleSearchInput}/>
                    <button id="searchButton" onClick={handleSearchButton}><img src="https://icons.veryicon.com/png/o/application/wq/search-171.png" alt="search icon" id="searchIcon"/></button>
                </div>
                <Filter
                    handleFilterType={handleFilterType}
                    handleFilterCreation={handleFilterCreation}
                    handleFilterAlphabetic={handleFilterAlphabetic}
                    handleFilterAttack={handleFilterAttack}
                    handleFilterDefense={handleFilterDefense}
                />
            </div>
            <div id="refreshAndCreate">
                <button id="refresh"><img id="refreshIcon" src="https://www.iconpacks.net/icons/2/free-refresh-icon-3104-thumb.png" alt="refresh" onClick={handleReloadPage}/></button>
                <Link to={"/create"} id="link">
                    <div id="create">
                        <img id="createIcon" src="https://cdn1.iconfinder.com/data/icons/zeir-miscellaneous-elements-1/32/plus_add_new_more_positive-512.png" alt="create icon"/>
                        <p>CREATE POKEMON</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;