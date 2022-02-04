import { getPokemonByName } from "./getPokemonByName";

export async function getAllPokemonsByName(cantPokemons) {
	let pokemons = [];
	
	for (let i = 0; i < cantPokemons.length; i++) {
		pokemons = [ ...pokemons, ...await getPokemonByName(cantPokemons[i]) ];
	}
	
	return pokemons;
}