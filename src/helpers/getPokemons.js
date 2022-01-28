import { getPokemon } from "./getPokemon";

export async function getPokemons(cant) {
	let pokemons = [];
	
	for (let i = 1; i <= cant; i++) {
		pokemons = [ ...pokemons, ...await getPokemon(i) ];
	}
	
	return pokemons;
}

