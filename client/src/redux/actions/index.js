import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_BY_ATTACK = "FILTER_BY_ATTACK";
export const FILTER_BY_DEFENSE = "FILTER_BY_DEFENSE";
export const FILTER_ALPHABETIC = "FILTER_ALPHABETIC";
export const FILTER_BY_CREATION = "FILTER_BY_CREATION";

export const getAllPokemons = () => {
    return async function (dispatch){
        const response = await axios("http://localhost:3001/pokemons");
        dispatch({
            type: GET_ALL_POKEMONS,
            payload: response.data
        })
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