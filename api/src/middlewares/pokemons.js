const { Router } = require('express');
const { getGeneralInfoPokemons, getDetailedInfoPokemon } = require('../controllers/logic');
const { Pokemon, Types } = require('../db');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const { name } = req.query;
        let allPokemons = await getGeneralInfoPokemons();
        if( name ){
            let findPokemon = await getDetailedInfoPokemon(name.toLowerCase());
            findPokemon ?
            res.status(200).send(findPokemon):
            res.status(404).send('No encontramos ese Pokémon en la Pokédex :(')
        } else {
            res.status(200).send(allPokemons);
        }
    } catch (error) {
        res.status(404).send(error);
    }
});

router.get('/:idPokemon', async (req, res) => {
    try {
        const { idPokemon } = req.params;
        let findPokemon = await getDetailedInfoPokemon(idPokemon);
        findPokemon ?
        res.status(200).send(findPokemon):
        res.status(404).send('No encontramos ese Pokémon en la Pokédex :(')
    } catch (error) {
        res.status(404).send(error);
    }
});

router.post('/', async (req, res) => {
    let {
        image,
        name,
        types,
        hp,
        attack,
        defense,
        speed,
        height,
        weight
    } = req.body;
    if ( !image || !name || !types || !hp || !attack || !defense || !speed || !height || !weight ){
        return res.status(404).send("Falta enviar datos obligatorios")
    };
    try {
        let newPokemon = await Pokemon.create({
            image,
            name,
            hp,
            attack,
            defense,
            speed,
            height,
            weight
        });
        let pokemonType = await Types.findAll({
            where: {name: types}
        });
        newPokemon.addTypes(pokemonType);
        res.status(200).send(`Personaje creado satisfactoriamente.`);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;