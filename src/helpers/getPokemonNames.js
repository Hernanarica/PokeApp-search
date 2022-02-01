import { getPokemonOnlyName } from "./getPokemonOnlyName";

export async function getPokemonNames(url) {
	let pokemons = [];
	
	for (let i = 1; i <= 150; i++) {
		pokemons = [ ...pokemons, ...await getPokemonOnlyName(i) ];
	}
	
	return pokemons;
}