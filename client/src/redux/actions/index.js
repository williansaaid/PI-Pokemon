import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";

export const getAllPokemons = () => {
    return async function (dispatch){
        const response = await axios("http://localhost:3001/pokemons");
        dispatch({
            type: GET_ALL_POKEMONS,
            payload: response.data
        })
    }
}