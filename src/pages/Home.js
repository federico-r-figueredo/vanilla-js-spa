import PokemonService from '../services/PokemonService.js';

async function Home() {
    const pokemons = await PokemonService.getPokemons();
    const view = /*html*/ `
        <div class="pokemons">
            ${pokemons
                .map(
                    (pokemon) => /*html*/ `
                <article class="pokemon-item">
                    <a href='#/${pokemon.id}'>
                        <img src='${pokemon.sprites.front_default}' alt='${pokemon.name}-image' />
                        <h2>${pokemon.name}</h2>
                    </a>
                </article>
            `
                )
                .join('')}
        </div>
    `;

    return view;
}

export default Home;
