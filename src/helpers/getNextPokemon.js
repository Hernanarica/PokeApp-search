import { getPokemonsByOffsetAndLimit } from "./getPokemonsByOffsetAndLimit";
import { getAllPokemonsByName } from "./getAllPokemonsByName";

export async function getNextPokemon(offset = 0, limit = 15) {
	const results      = await getPokemonsByOffsetAndLimit(offset, limit);
	const pokemonNames = await results.map(pokemon => pokemon.name);
	
	return await getAllPokemonsByName(pokemonNames);
}