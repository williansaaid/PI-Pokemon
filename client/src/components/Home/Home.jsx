import React from "react";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, filterTypePokemon, filterByCreation, filterAlphabetic, filterByAttack, filterByDefense, getPokemonByName, cleanPokemonsHome } from "../../redux/actions";
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
    const [name, setName] = useState("");
    const lastPokemonIndex = currentPage * pokemonsPerPage;
    const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(firstPokemonIndex, lastPokemonIndex);

    useEffect(()=>{
        dispatch(getAllPokemons());
        return function(){
            dispatch(cleanPokemonsHome())
        }
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
        name.length > 0 ? dispatch(getPokemonByName(name)) : alert("You can not find a Pokémon without name ;)");
        setName("");
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
            {
                currentPokemons.length > 0 && typeof currentPokemons === "object" ?
                    <div id="renderPokemons">
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
                    </div> :
                        typeof currentPokemons === "object" ?
                        <img src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" alt="Loading gif" id="gif"/> :
                        <img src="https://media.tenor.com/wWiwC0p518wAAAAC/nothing-no.gif" alt="None gif" id="gifNone"/>
            }
        </div>
    )
}