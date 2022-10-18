import React from "react";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, filterTypePokemon, filterByCreation, filterAlphabetic, filterByAttack, filterByDefense, getPokemonByName } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./Home.css"
import Pagination from "../Pagination/Pagination";

export default function Home (){

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const [order, setOrder] = useState("");
    const [ name, setName ] = useState("");
    const lastPokemonIndex = currentPage * pokemonsPerPage;
    const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(firstPokemonIndex, lastPokemonIndex);

    useEffect(()=>{
        dispatch(getAllPokemons());
    },[]);

    function handleReloadPage(event){
        event.preventDefault();
        dispatch(getAllPokemons());
    }

    function handleFilterType(event){
        dispatch(filterTypePokemon(event.target.value))
    }

    function handleFilterAlphabetic(event){
        event.preventDefault();
        dispatch(filterAlphabetic(event.target.value))
        setCurrentPage(1);
        setOrder(`Order ${event.target.value}`);
    }

    function handleFilterAttack(event){
        event.preventDefault();
        dispatch(filterByAttack(event.target.value))
        setCurrentPage(1);
        setOrder(`Order ${event.target.value}`);
    }

    function handleFilterDefense(event){
        event.preventDefault();
        dispatch(filterByDefense(event.target.value))
        setCurrentPage(1);
        setOrder(`Order ${event.target.value}`);
    }

    function handleFilterCreation(event){
        dispatch(filterByCreation(event.target.value))
    }

    function handleSearchInput(event){
        event.preventDefault();
        setName(event.target.value);
    }

    function handleSearchButton(event){
        event.preventDefault();
        dispatch(getPokemonByName(name));
    }

    return (
        <div className="home">
            <NavBar
                handleFilterType={handleFilterType}
                handleReloadPage={handleReloadPage}
                handleFilterCreation={handleFilterCreation}
                handleFilterAlphabetic={handleFilterAlphabetic}
                handleFilterAttack={handleFilterAttack}
                handleFilterDefense={handleFilterDefense}
                handleSearchInput={handleSearchInput}
                handleSearchButton={handleSearchButton}
            />
            <div className="cardContainer">
                {currentPokemons&&currentPokemons.map(pokemon => <PokemonCard
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    types={pokemon.types}
                />)}
            </div>
            <div>
                <Pagination
                    totalPokemons={allPokemons.length}
                    pokemonsPerPage={pokemonsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}