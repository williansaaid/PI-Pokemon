import React from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css"

const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const PokemonCard = (props) => {
    return (
        <div className="card">
                <p>#{props.id}</p>
                <Link to={`pokemons/${props.id}`}>
                    <img src={props.image} alt={`Imagen de ${props.name}`} className="image"/>
                </Link>
                <p className="name">{capitalizeFirst(props.name)}</p>
                <div>
                    {props.types.map(type => <p className="type" key={type}>{capitalizeFirst(type)}</p>)}
                </div>
        </div>
    );
};

export default PokemonCard;