export async function getPrevPokemon(cant) {
	const fetchData    = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${ cant }&limit=15`);
	const { results }  = await fetchData.json();
	const pokemonNames = await results.map(pokemon => pokemon.name);
	
	let data = [];
	for (let i = 0; i < pokemonNames.length; i++) {
		const fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon/${ pokemonNames[i] }`);
		data            = data = [ ...data, await fetchData.json() ];
	}
	
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