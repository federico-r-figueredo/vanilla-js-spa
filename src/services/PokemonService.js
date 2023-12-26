class PokemonService {
    static #baseURL = `http://pokeapi.co/api/v2/pokemon`;

    static async getPokemon(id) {
        if (!id && !(id === 0))
            throw new Error('You must provide an argument for parameter id');

        try {
            const response = await fetch(`${this.#baseURL}/${id}`);
            return await response.json();
        } catch (error) {
            console.error(`Fetch API error: ${error}`);
        }
    }

    static async getPokemons(offset = 0, limit = 25) {
        const pokemons = [];
        for (let index = 1; index < limit; index++) {
            const pokemon = await this.getPokemon(offset + index);
            pokemons.push(pokemon);
        }

        return pokemons;
    }
}

export default PokemonService;
