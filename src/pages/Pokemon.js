import getHash from '../utils/getHash.js';
import PokemonService from '../services/PokemonService.js';
import NotFound from './NotFound.js';

async function Pokemon() {
    const id = getHash();
    const pokemon = await PokemonService.getPokemon(id);
    console.log(pokemon);
    const view = /*html*/ `
        <div class="pokemon-inner">
            <article class="pokemon-card">
                <img src="${pokemon.sprites.front_default}" alt="pokemon-name" />
                <h2>${pokemon.name}</h2>
            </article>
            <article class="pokemon-card">
                <h3>Number: ${pokemon.id}</h3>
                <h3>Type: ${pokemon.types[0].type.name}</h3>
                <h3>Moves: ${pokemon.moves[1].move.name}</h3>
                <h3>Ability: ${pokemon.abilities[1].ability.name}</h3>
            </article>
        </div>
    `;

    return view;
}

export default Pokemon;
