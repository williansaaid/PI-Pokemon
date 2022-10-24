import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_BY_ATTACK = "FILTER_BY_ATTACK";
export const FILTER_BY_DEFENSE = "FILTER_BY_DEFENSE";
export const FILTER_ALPHABETIC = "FILTER_ALPHABETIC";
export const FILTER_BY_CREATION = "FILTER_BY_CREATION";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const GET_POKEMONS_TYPES = "GET_POKEMONS_TYPES";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const CLEAN_POKEMONS_HOME = "CLEAN_POKEMONS_HOME";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";

export const getAllPokemons = () => {
    return async function (dispatch){
        try {
            const response = await axios("/pokemons");
            dispatch({
                type: GET_ALL_POKEMONS,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getPokemonByName = (payload) => {
    return async function (dispatch){
        try {
            const response = await axios(`/pokemons?name=${payload}`);
            dispatch({
                type: GET_POKEMON_BY_NAME,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
            alert(`We could not find "${payload}" in our Pokédex :(`)
        }
    }
}

export const getPokemonName = () => {
    return {
        type: GET_POKEMON_NAME
    }
}

export const getPokemonDetail = (payload) => {
    return async function (dispatch){
        try {
            const response = await axios(`/pokemons/${payload}`)
            dispatch({
                type: GET_POKEMON_DETAIL,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getPokemonsTypes = () => {
    return async function (dispatch){
        try {
            const response = await axios("/types");
            dispatch({
                type: GET_POKEMONS_TYPES,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const createPokemon = (payload) => {
    return async function (dispatch){
        try {
            const response = await axios.post("/pokemons", payload);
            dispatch({
                type: CREATE_POKEMON
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

export const filterTypePokemon = (payload) => {
    return {
        type: FILTER_BY_TYPE,
        payload
    }
}

export const filterByAttack = (payload) => {
    return {
        type: FILTER_BY_ATTACK,
        payload
    }
}

export const filterByDefense = (payload) => {
    return {
        type: FILTER_BY_DEFENSE,
        payload
    }
}

export const filterAlphabetic = (payload) => {
    return {
        type: FILTER_ALPHABETIC,
        payload
    }
}

export const filterByCreation = (payload) => {
    return {
        type: FILTER_BY_CREATION,
        payload
    }
}

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL
    }
}

export const cleanPokemonsHome = () => {
    return {
        type: CLEAN_POKEMONS_HOME
    }
}