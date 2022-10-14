import React from "react";
import "./Filter.css";

const Filter = () => {
    return (
        <div className="containerFilter">
            <select className="filter" defaultValue={""}>
                <option value={""} disabled>A - Z</option>
                <option value={"asc"}>Ascending</option>
                <option value={"dsc"}>Descending</option>
            </select>
            <select className="filter" defaultValue={""}>
                <option value={""} disabled>Type</option>
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
            <select className="filter" defaultValue={""}>
                <option value={""} disabled>Attack</option>
                <option value={"max"}>Max Attack</option>
                <option value={"min"}>Min Attack</option>
            </select>
            <select className="filter" defaultValue={""}>
                <option value={""} disabled>Defense</option>
                <option value={"max"}>Max Defense</option>
                <option value={"min"}>Min Defense</option>
            </select>
            <select className="filter" defaultValue={""}>
                <option value={""} disabled>All</option>
                <option value={"asc"}>Originals</option>
                <option value={"dsc"}>Created</option>
            </select>
        </div>
    )
};

export default Filter;