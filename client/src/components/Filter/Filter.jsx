import React from "react";
import { useState } from "react";
import "./Filter.css";

const Filter = ({handleFilterType, handleFilterCreation, handleFilterAlphabetic, handleFilterAttack, handleFilterDefense, handleCheckBox }) => {

    const [filter, setFilter] = useState(false);
    function handleCheckBox(event){
        event.preventDefault();
        filter ? setFilter(false) : setFilter(true);
    }

    return (
        <div id="filters">
            <button
                type={"button"}
                id="menuButton"
                name="checbx"
                onClick={(e) => handleCheckBox(e)}
            >
                <img src={"https://cdn-icons-png.flaticon.com/512/5629/5629559.png"}
                alt="menu icon"
                />
            </button>
            <div
                className="containerFilter"
                id={!filter ? "ocult" : "visible"}
            >
                <select className="filter" defaultValue={""} onChange={handleFilterAlphabetic} id="alphabeticOrder">
                    <option value={""} disabled>Alphabetic Order</option>
                    <option value={"a-z"}>A - Z</option>
                    <option value={"z-a"}>Z - A</option>
                </select>
                <select className="filter" defaultValue={"allTypes"} onChange={handleFilterType}>
                    <option value={"allTypes"}>All Types</option>
                    <option value={"normal"}>Normal</option>
                    <option value={"fire"}>Fire</option>
                    <option value={"water"}>Water</option>
                    <option value={"fighting"}>Fighting</option>
                    <option value={"flying"}>Flying</option>
                    <option value={"poison"}>Poison</option>
                    <option value={"ground"}>Ground</option>
                    <option value={"rock"}>Rock</option>
                    <option value={"bug"}>Bug</option>
                    <option value={"ghost"}>Ghost</option>
                    <option value={"steel"}>Steel</option>
                    <option value={"grass"}>Grass</option>
                    <option value={"electric"}>Electric</option>
                    <option value={"psychic"}>Psychic</option>
                    <option value={"ice"}>Ice</option>
                    <option value={"dragon"}>Dragon</option>
                    <option value={"dark"}>Dark</option>
                    <option value={"fairy"}>Fairy</option>
                    <option value={"shadow"}>Shadow</option>
                    <option value={"unknown"}>Unknown</option>
                </select>
                <select className="filter" defaultValue={""} onChange={handleFilterAttack}>
                    <option value={""} disabled>Attack</option>
                    <option value={"maxAtk"}>Max Attack</option>
                    <option value={"minAtk"}>Min Attack</option>
                </select>
                <select className="filter" defaultValue={""} onChange={handleFilterDefense}>
                    <option value={""} disabled>Defense</option>
                    <option value={"maxDef"}>Max Defense</option>
                    <option value={"minDef"}>Min Defense</option>
                </select>
                <select className="filter" defaultValue={"all"} onChange={handleFilterCreation}>
                    <option value={"all"}>All</option>
                    <option value={"api"}>Originals</option>
                    <option value={"db"}>Created</option>
                </select>
            </div>
        </div>
    )
};

export default Filter;