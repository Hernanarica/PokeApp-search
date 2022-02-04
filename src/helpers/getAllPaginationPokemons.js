import { getPokemonsByLimit } from "./getPokemonsByLimit";
import { getAllPokemonsByName } from "./getAllPokemonsByName";

export async function getAllPaginationPokemons(limit = 15) {
	const results      = await getPokemonsByLimit(limit);
	const pokemonNames = await results.map(pokemon => pokemon.name);
	
	return await getAllPokemonsByName(pokemonNames);
}