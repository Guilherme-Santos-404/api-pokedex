import axios from 'axios';
import { Request, Response } from 'express';

const baseUrl = 'https://pokeapi.co/api/v2/';

interface basicInformations {
    name: string,
    order: number,
    id: number,
    height: number,
    weight: number;
};

export class PokemonService {
    async getInformationPokemon(req: string) {
        const url = `${baseUrl}pokemon/${req}`;
        console.log(url);

        try {
            const response = await axios.get<any>(url);
            return response.data;
        } catch (error) {
            console.error('Ocorreu algum erro ao executar a pesquisa', error);
            throw new Error('Internal server error');
        }
    }

    async getPokemon(req: string, res: Response) {
        const pokemonInformation = await this.getInformationPokemon(req);
        res.json(pokemonInformation);
    }

    async getSpecificPokemon(Pokemon: string, information: string, res: Response) {
        try {
            const data = await this.getInformationPokemon(Pokemon);
            
            if (data) {
                const specificInformation: { [key: string]: string } = data[information];
                res.json(specificInformation);
            } else {
                console.error('Não foi possível obter os dados da API.');
                res.status(404).json({ error: 'Não foi possível obter os dados da API' });
            }
        } catch (error) {
            console.error('Ocorreu um erro ao obter os dados do Pokémon', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getBasicPokemon(Pokemon: string, res: Response) {
        try {
            const data = await this.getInformationPokemon(Pokemon);
            
            if (data) {
                const basicInformation: basicInformations = {
                    name: data.name,
                    order: data.order,
                    id: data.id,
                    height: data.height,
                    weight: data.weight
                };
                res.json(basicInformation);
            } else {
                console.error('Não foi possível obter os dados da API.');
                res.status(404).json({ error: 'Não foi possível obter os dados da API' });
            }
        } catch (error) {
            console.error('Ocorreu um erro ao obter os dados do Pokémon', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
