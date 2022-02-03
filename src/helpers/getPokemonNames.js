export async function getPokemonNames() {
	const fetchData   = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1118`);
	const { results } = await fetchData.json();
	
	return results.map(pokemon => ({ name: pokemon.name }));
}