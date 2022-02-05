export async function getInterfaceDetailPokemon(data) {
	return data.map(pokemon => {
		return {
			id: pokemon.id,
			name: pokemon.name,
			image: pokemon.sprites.other.dream_world.front_default,
			alt: pokemon.name,
			types: pokemon.types.map(type => type.type.name),
			stats: pokemon.stats.filter(stat => stat.stat.name === 'attack' || stat.stat.name === 'hp' || stat.stat.name === 'defense')
		};
	});
}