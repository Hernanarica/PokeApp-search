import { getPokemonsByLimit } from "./getPokemonsByLimit";

export async function getPokemonNames(limit = 1118) {
	const results = await getPokemonsByLimit(limit);
	
	return results.map(pokemon => ({ name: pokemon.name }));
}