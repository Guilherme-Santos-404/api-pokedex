import express from 'express';
import { Request, Response, Router } from 'express';
import { PokemonController } from '../controllers/PokemonController';

const router = express.Router();
const Pokemon = new PokemonController();

router.get('/:Pokemon', Pokemon.getPokemon);
router.get('/basic_information/:Pokemon', Pokemon.getBasicPokemon);
router.get('/:information/:Pokemon', Pokemon.getSpritesPokemon);

export default router;