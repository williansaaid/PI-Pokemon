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
        <div className="detailWraper">
            {
                pokemon !== undefined && Object.keys(pokemon).length > 1 ?
                <div className="detailContainer">
                    <Link to={'/home'}>
                        <button id="returnHome">Return</button>
                    </Link>
                    <div id="namePkDetailContainer">
                        <h1 id="namePkDetail">{capitalizeFirst(pokemon.name)}</h1>
                    </div>
                    <h4 id="idPkDetail">ID: {pokemon.id}</h4>
                    <img src={pokemon.image} alt={pokemon.name} id="imgPkDetail"/>
                    <div className="typesPk">
                        {pokemon.types.map((type, key) => {
                            return <div className="typesDetail" key={key}>
                                <img src={icons[type]} alt={`${type} icon`} className="iconsPkDetail"/>
                                <p className="typeDetail" key={type}>{capitalizeFirst(type)}</p>
                            </div>
                    })}
                    </div>
                    <div className="dataText">
                        <div>
                            <h2>Stats</h2>
                            <p>HP: {pokemon.hp}</p>
                            <p>Attack Points: {pokemon.attack}</p>
                            <p>Defense Points: {pokemon.defense}</p>
                            <p>Speed: {pokemon.speed}</p>
                        </div>
                        <div>
                            <h2>Abilities</h2>
                            {
                                typeof pokemon.id === "number" ?
                                    pokemon.abilities.map((ability, key) => {
                                        return <p key={key}>{capitalizeFirst(ability)}</p>
                                    }) :
                                    <p>Uknown</p>
                            }
                        </div>
                        <div>
                            <h2>Additional Info</h2>
                            <p>Height: {pokemon.height} m</p>
                            <p>Weight: {pokemon.weight} kg</p>
                        </div>
                    </div>
                </div> :
                <img src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" alt="Loading gif" id="gif"/>
            }
        </div>
    )
};

export default PokemonDetail;