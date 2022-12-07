const { Pokemon, Types } = require('../db');
const axios = require('axios');

const limit = 50;
let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

const getGeneralInfoFromAPI = async () => {
    const responseApi = await axios.get(url);
    const result = responseApi.data.results;
    const allPokemons = [];

    for(let pk of result){
        const pkGeneral = await axios.get(pk.url);
        allPokemons.push({
            id: pkGeneral.data.id,
            image: pkGeneral.data.sprites.other["official-artwork"].front_default,
            name: pkGeneral.data.name,
            types: pkGeneral.data.types.map(e => e.type.name),
            attack: pkGeneral.data.stats[1].base_stat,
            defense: pkGeneral.data.stats[2].base_stat
        })
    }
    return allPokemons;
}

const getGeneralInfoFromDB = async () => {
    const pokemonDb = await Pokemon.findAll({
        attributes: ['id', 'image', 'name', 'attack', 'defense', 'createdInDb'],
        include: {
            model: Types,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });

    const infoDb = pokemonDb.map(pk => {
        return {
            id: pk.dataValues.id,
            image: pk.dataValues.image,
            name: pk.dataValues.name,
            types: pk.dataValues.Types.map(e => e.name),
            attack: pk.dataValues.attack,
            defense: pk.dataValues.defense,
            createdInDb: pk.dataValues.createdInDb
        }
    })
    return infoDb;
}

const getDetailedInfoFromAPI = async (param) => {
    const detailsUrl = `https://pokeapi.co/api/v2/pokemon/${param}`;
    let response;
    try {
        const responseApi = await axios.get(detailsUrl);
        const pkDetail = await responseApi.data;
        return response = {
            id: pkDetail.id,
            image: pkDetail.sprites.other["official-artwork"].front_default,
            name: pkDetail.name,
            types: pkDetail.types.map(e => e.type.name),
            hp: pkDetail.stats[0].base_stat,
            attack: pkDetail.stats[1].base_stat,
            defense: pkDetail.stats[2].base_stat,
            speed: pkDetail.stats[5].base_stat,
            height: pkDetail.height / 10,
            weight: pkDetail.weight / 10,
            abilities: pkDetail.abilities.map(e => e.ability.name)
        };
    } catch (error) {
        return response = undefined;
    }
}

const getDetailedInfoFromDB = async (param) => {
    let pokemonDb = await Pokemon.findAll({
        include: {
            model: Types,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });

    let infoDb = pokemonDb.map(pk => {
        return {
            id: pk.dataValues.id,
            image: pk.dataValues.image,
            name: pk.dataValues.name,
            types: pk.dataValues.Types.map(e => e.dataValues.name),
            hp: pk.dataValues.hp,
            attack: pk.dataValues.attack,
            defense: pk.dataValues.defense,
            speed: pk.dataValues.speed,
            height: pk.dataValues.height / 10,
            weight: pk.dataValues.weight / 10
        }
    })

    if(param.length > 30){
        let findPokemon = infoDb.find(pk => pk.id.toLowerCase() === param);
        return findPokemon;
    } else {
        let findPokemon = infoDb.find(pk => pk.name.toLowerCase() === param);
        return findPokemon;
    }
}

const getGeneralInfoPokemons = async () => {
    const infoFromDB = await getGeneralInfoFromDB();
    const infoFromApi = await getGeneralInfoFromAPI();
    const allPokemons = infoFromDB.concat(infoFromApi);
    return allPokemons;
}

const getDetailedInfoPokemon = async (param) => {
    const infoFromDB = await getDetailedInfoFromDB(param);
    const infoFromApi = await getDetailedInfoFromAPI(param);
    let pokemonDetailed;
    infoFromApi ? pokemonDetailed = infoFromApi : pokemonDetailed = infoFromDB;
    return pokemonDetailed;
}

const getPokemonTypes = async () => {
    let url = 'https://pokeapi.co/api/v2/type';
    const responseApi = await axios.get(url);
    const result = responseApi.data.results;

    result.map(e => {
        Types.findOrCreate({
            where: {name: e.name}
        })
    });

    return await Types.findAll();
}


module.exports = {
    getGeneralInfoFromAPI,
    getGeneralInfoFromDB,
    getDetailedInfoFromAPI,
    getDetailedInfoFromDB,
    getGeneralInfoPokemons,
    getDetailedInfoPokemon,
    getPokemonTypes
};