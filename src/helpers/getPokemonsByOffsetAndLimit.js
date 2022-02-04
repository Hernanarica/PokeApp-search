import { API_POKEMON } from "../constants";

export async function getPokemonsByOffsetAndLimit(offset = 15, limit = 15) {
	const fetchData   = await fetch(`${ API_POKEMON }?offset=${ offset }&limit=${ limit }`);
	const { results } = await fetchData.json();
	
	return results;
}