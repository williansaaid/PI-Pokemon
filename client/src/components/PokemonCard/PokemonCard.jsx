import React from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css"
import { icons, capitalizeFirst } from "../../helpers/utils";

const PokemonCard = (props) => {
    return (
        <div className="card">
                <p>#{props.id}</p>
                <Link to={`pokemons/${props.id}`}>
                    <img src={props.image} alt={`Imagen de ${props.name}`} className="image"/>
                </Link>
                <p className="name">{capitalizeFirst(props.name)}</p>
                <div className="containerTypesGeneral">
                    {props.types.map((type, key) => {
                        return <div className="iconTypes" key={key}>
                            <img src={icons[type]} alt={`${type} icon`} className="iconsPk"/>
                            <p className="typePkGeneral" key={type}>{capitalizeFirst(type)}</p>
                        </div>
                    })}
                </div>
        </div>
    );
};

export default PokemonCard;