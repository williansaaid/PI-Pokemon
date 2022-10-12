const { Pokemon, Types } = require('../db');
const axios = require('axios');

const limit = 15;

const getInfoFromAPI = async () => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    const responseApi = await axios.get(url);
    const result = responseApi.data.results;
    const allPokemons = [];

    for(let pk of result){
        const pkDetail = await axios.get(pk.url);
        allPokemons.push({
            id: pkDetail.data.id,
            image: pkDetail.data.sprites.front_default,
            name: pkDetail.data.name,
            type: pkDetail.data.types.map(e => e.type.name),
            hp: pkDetail.data.stats[0].base_stat,
            attack: pkDetail.data.stats[1].base_stat,
            defense: pkDetail.data.stats[2].base_stat,
            speed: pkDetail.data.stats[5].base_stat,
            height: pkDetail.data.height / 10,
            weight: pkDetail.data.weight / 10,
            abilities: pkDetail.data.abilities.map(e => e.ability.name)
        })
    }
    return allPokemons;
}

const getInfoFromDB = async () => {
    return await Pokemon.findAll();
}

const getAllPokemons = async () => {
    const infoFromApi = await getInfoFromAPI();
    const infoFromDB = await getInfoFromDB();
    const allPokemons = infoFromApi.concat(infoFromDB);
    return allPokemons;
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
    getInfoFromAPI,
    getInfoFromDB,
    getAllPokemons,
    getPokemonTypes
};