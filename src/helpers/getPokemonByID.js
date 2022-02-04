import { getInterfacePokemon } from "./getInterfacePokemon";
import { API_POKEMON } from "../constants";

export async function getPokemonByID(id) {
	const fetchData = await fetch(`${ API_POKEMON }/${ id }`);
	const data      = [ await fetchData.json() ];
	
	return getInterfacePokemon(data);
}