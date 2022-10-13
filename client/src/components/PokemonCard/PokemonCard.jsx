import React from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css"

const PokemonCard = (props) => {
    return (
        <div className="card">
                <p>{props.id}</p>
                <Link to={`pokemons/${props.id}`}>
                    <img src={props.image} alt={`Imagen de ${props.name}`} className="image"/>
                </Link>
                <p className="name">{props.name}</p>
                <div>
                    {props.types.map(type => <p className="type" key={type}>{type}</p>)}
                </div>
        </div>
    );
};

export default PokemonCard;