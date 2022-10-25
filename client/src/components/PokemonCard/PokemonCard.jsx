import React from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css"
import { icons, capitalizeFirst } from "../../helpers/utils";

const PokemonCard = (props) => {
    return (
        props.id !== undefined ||
        props.name !== undefined ||
        props.image !== undefined ||
        props.types !== undefined ?
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
            : <img src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" alt="Loading gif" id="gif"/>
    );
};

export default PokemonCard;