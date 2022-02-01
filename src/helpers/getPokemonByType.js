export async function getPokemonByType(url) {
	const fetchData   = await fetch(url);
	const { results } = await fetchData.json();
	return await results.map(category => category.name);
}