export async function getPokemonOnlyName(id) {
	const fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`);
	const data      = [ await fetchData.json() ];
	
	return data.map(pokemon => ({ name: pokemon.name }));
}