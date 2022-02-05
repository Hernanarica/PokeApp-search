import { API_POKEMON } from "../constants";
import { getInterfaceDetailPokemon } from "./getInterfaceDetailPokemon";

export async function getPokemonDetailByID(id) {
	const fetchData = await fetch(`${ API_POKEMON }/${ id }`);
	const data      = [ await fetchData.json() ];
	
	return getInterfaceDetailPokemon(data);
}