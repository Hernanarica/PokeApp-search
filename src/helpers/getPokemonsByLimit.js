import { API_POKEMON } from "../constants";

export async function getPokemonsByLimit(limit = 15) {
	const fetchData   = await fetch(`${ API_POKEMON }?limit=${ limit }`);
	const { results } = await fetchData.json();
	
	return results;
}