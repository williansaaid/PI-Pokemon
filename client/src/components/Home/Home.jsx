import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./Home.css"

export default function Home (){

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);

    useEffect(()=>{
        dispatch(getAllPokemons());
    },[]);

    return (
        <div className="home">
            <NavBar/>
            <div className="cardContainer">
                {allPokemons&&allPokemons.map(pokemon => <PokemonCard
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    types={pokemon.types}
                />)}
            </div>
        </div>
    )
}