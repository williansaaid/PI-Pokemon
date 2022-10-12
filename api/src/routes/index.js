const { Router } = require('express');
const pokemonsMiddleware = require('../middlewares/pokemons.js');
const typesMiddleware = require('../middlewares/types.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers

router.use('/pokemons', pokemonsMiddleware);
router.use('/types', typesMiddleware);

module.exports = router;
