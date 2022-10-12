const { Router } = require('express');
const { getPokemonTypes } = require('../controllers/logic');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const pokemonTypes = await getPokemonTypes();
        res.status(200).send(pokemonTypes);
    } catch (error) {
        res.status(400).send('Ocurrio un error.');
    }
});

module.exports = router;