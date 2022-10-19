import { FILTER_ALPHABETIC, FILTER_BY_ATTACK, FILTER_BY_CREATION, FILTER_BY_DEFENSE, FILTER_BY_TYPE, GET_ALL_POKEMONS, GET_POKEMONS_TYPES, GET_POKEMON_BY_NAME, CREATE_POKEMON, GET_POKEMON_DETAIL, CLEAN_DETAIL, CLEAN_POKEMONS_HOME } from "../actions";

const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    detail: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            };

        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemons: [action.payload]
            }

        case GET_POKEMON_DETAIL:
            return {
                ...state,
                detail: action.payload
            }

        case GET_POKEMONS_TYPES:
            return {
                ...state,
                types: action.payload
            }

        case CREATE_POKEMON:
            return {
                ...state,
                detail: action.payload
            }

        case FILTER_BY_TYPE: {
            const allPokemons = state.allPokemons;
            const filteredByType = action.payload === "allTypes" ?
            allPokemons :
            allPokemons.filter(pk =>{
                return pk.types.find(type => type === action.payload) === action.payload
            });
            return {
                ...state,
                pokemons: filteredByType
            };
        }

        case FILTER_BY_ATTACK: {
            const filteredAttack = action.payload === "minAtk" ?
            state.pokemons.sort(function(a, b){
                if(a.attack > b.attack) return 1;
                if(b.attack > a.attack) return -1;
                return 0;
            }) :
            state.pokemons.sort(function(a, b){
                if(a.attack > b.attack) return -1;
                if(b.attack > a.attack) return 1;
                return 0;
            });
            return {
                ...state,
                pokemons: filteredAttack
            }
        }

        case FILTER_BY_DEFENSE: {
            const filteredDefense = action.payload === "minDef" ?
            state.pokemons.sort(function(a, b){
                if(a.defense > b.defense) return 1;
                if(b.defense > a.defense) return -1;
                return 0;
            }) :
            state.pokemons.sort(function(a, b){
                if(a.defense > b.defense) return -1;
                if(b.defense > a.defense) return 1;
                return 0;
            });
            return {
                ...state,
                pokemons: filteredDefense
            }
        }

        case FILTER_ALPHABETIC: {
            const filteredAlphabetic = action.payload === "a-z" ?
            state.pokemons.sort(function(a, b){
                if(a.name > b.name) return 1;
                if(b.name > a.name) return -1;
                return 0;
            }) :
            state.pokemons.sort(function(a, b){
                if(a.name > b.name) return -1;
                if(b.name > a.name) return 1;
                return 0;
            });
            return {
                ...state,
                pokemons: filteredAlphabetic
            }
        }

        case FILTER_BY_CREATION: {
            const allPokemons = state.allPokemons;
            let filteredByCreation = action.payload === "db" ?
            allPokemons.filter(pk => pk.createdInDb) :
            allPokemons.filter(pk => !pk.createdInDb);
            if (filteredByCreation.length === 0){
                filteredByCreation = "No Pokemon in DB"
                alert("There are no Pokémons created yet!")
            }
            return {
                ...state,
                pokemons: action.payload === "all" ? state.allPokemons : filteredByCreation
            }
        }

        case CLEAN_DETAIL:
            return {
                ...state,
                detail: []
            }

        case CLEAN_POKEMONS_HOME:
            return {
                ...state,
                pokemons: []
            }

        default:
            return { ...state };
    };
};

export default rootReducer;