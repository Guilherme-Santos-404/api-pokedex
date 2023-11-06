import { Request, Response } from 'express';
import { PokemonService } from '../services/PokemonService';

export class PokemonController {
    private pokemonService: PokemonService;

    constructor() {
        this.pokemonService = new PokemonService();
    }

    getPokemon = async (req: Request, res: Response ) => {
        const { Pokemon } = req.params;
        await this.pokemonService.getPokemon(Pokemon, res);
    };

    getSpritesPokemon = async (req: Request, res: Response ) => {
        const { Pokemon } = req.params;
        const { information } = req.params;
        await this.pokemonService.getSpecificPokemon(Pokemon, information, res)
    };

    getBasicPokemon = async (req: Request, res: Response ) => {
        const { Pokemon } = req.params;
        await this.pokemonService.getBasicPokemon(Pokemon, res)
    };
}