export async function getPokemon(id) {
	const fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`);
	const data      = [ await fetchData.json() ];
	
	return data.map(pokemon => {
		return {
			id: pokemon.id,
			name: pokemon.name,
			image: pokemon.sprites.other.dream_world.front_default,
			alt: pokemon.name,
			types: pokemon.types.map(type => type.type.name)
		};
	});
}