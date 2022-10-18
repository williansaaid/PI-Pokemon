import React from "react";
import "./PokemonDetail.css";
import { cleanDetail, getPokemonDetail } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { icons, capitalizeFirst } from "../../helpers/utils";

const PokemonDetail = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemonDetail(props.match.params.id))

        return function() {
            dispatch(cleanDetail())
        }
    }, [dispatch])
    const pokemon = useSelector((state) => state.detail)

    return (
        <div className="detailContainer">
            {
                Object.keys(pokemon).length > 1 ?
                <div>
                    <Link to={'/home'}>
                        <button>Return</button>
                    </Link>
                    <h1>{capitalizeFirst(pokemon.name)}</h1>
                    <p>ID: {pokemon.id}</p>
                    <img src={pokemon.image}/>
                    <div className="typesPk">
                        {pokemon.types.map((type, key) => {
                            return <div className="typesDetail" key={key}>
                                <img src={icons[type]} alt={`${type} icon`} className="iconsPkDetail"/>
                                <p className="typeDetail" key={type}>{capitalizeFirst(type)}</p>
                            </div>
                    })}
                    </div>
                    <div>
                        <h4>Stats</h4>
                        <p>HP: {pokemon.hp}</p>
                        <p>Attack Points: {pokemon.attack}</p>
                        <p>Defense Points: {pokemon.defense}</p>
                        <p>Speed: {pokemon.speed}</p>
                    </div>
                    <div>
                        <h4>Abilities</h4>
                        {pokemon.abilities.map((ability, key) => {
                            return <p key={key}>{capitalizeFirst(ability)}</p>
                        })}
                    </div>
                    <div>
                        <p>Height: {pokemon.height} m</p>
                        <p>Weight: {pokemon.weight} kg</p>
                    </div>
                </div> :
                <img src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" alt="Loading gif" id="gif"/>
            }
        </div>
    )
};

export default PokemonDetail;