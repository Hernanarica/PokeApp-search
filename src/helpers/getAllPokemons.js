import { getPokemonByID } from "./getPokemonByID";

export async function getAllPokemons(cant = 15) {
	let pokemons = [];
	
	for (let i = 1; i <= cant; i++) {
		pokemons = [ ...pokemons, ...await getPokemonByID(i) ];
	}
	
	return pokemons;
}

