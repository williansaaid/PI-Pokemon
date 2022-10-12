const { Router } = require('express');
const { getAllPokemons } = require('../controllers/logic');
const { Pokemon, Types } = require('../db');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const { name } = req.query;
        let pokemons = await getAllPokemons();
        if( name ){
            let findPokemon = pokemons.filter(pk =>
                pk.name.toLowerCase().includes(name.toLowerCase())
            );
            findPokemon.length > 0 ?
            res.status(200).send(findPokemon):
            res.status(404).send('No encontramos ese Pokémon en la Pokédex :(')
        } else {
            res.status(200).send(pokemons);
        }
    } catch (error) {
        res.status(404).send(error);
    }
});
router.get('/:idPokemon', async (req, res) => {
    try {
        const { idPokemon } = req.params;
        let pokemons = await getAllPokemons();
        let findPokemon = pokemons.find(pk => parseInt(pk.id) === parseInt(idPokemon));
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
        weight,
        abilities
    } = req.body;
    if ( !image || !name || !types || !hp || !attack || !defense || !speed || !height || !weight || !abilities ){
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
            weight,
            abilities
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