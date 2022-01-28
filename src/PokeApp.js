import React, { useState, useEffect } from 'react';
import { getPokemons } from "./helpers/getPokemons";
import { PokemonItem } from "./components/PokemonItem";

export function PokeApp() {
	const [ pokemons, setPokemons ] = useState({
		data: null,
		loading: true
	});
	
	useEffect(() => {
		getPokemons(5).then(r => {
			setPokemons({
				data: r,
				loading: false
			});
		});
	}, []);
	
	return (
		<>
			<h1>PokeApp</h1>
			{/*@formatter:off*/}
			{
				pokemons.loading && <div className="loader loader-pokeball is-active"></div>
			}
			{
				pokemons.data && pokemons.data.map(pokemon => ( <PokemonItem key={ pokemon.id } { ...pokemon } /> ))
			}
			{/*@formatter:on*/ }
		</>
	);
}