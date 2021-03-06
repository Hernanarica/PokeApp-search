import { getInterfacePokemon } from "./getInterfacePokemon";
import { API_POKEMON } from "../constants";

export async function getPokemonByName(name) {
	const fetchData = await fetch(`${ API_POKEMON }/${ name }`);
	const data      = [ await fetchData.json() ];
	
	return getInterfacePokemon(data);
}