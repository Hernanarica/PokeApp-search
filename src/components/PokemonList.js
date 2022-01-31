import React, { useEffect, useState } from 'react';
import { PokemonItem } from "./PokemonItem";
import { getPokemons } from "../helpers/getPokemons";

export function PokemonList() {
	const [ pokemons, setPokemons ] = useState({
		data: null,
		loading: true
	});
	
	useEffect(() => {
		getPokemons(10).then(r => {
			setPokemons({
				data: r,
				loading: false
			});
		});
	}, []);
	
	return (
		<>
			{/*@formatter:off*/}
			{
				pokemons.loading && <div className="loader loader-pokeball is-active"></div>
			}
			<ul className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
				{
					pokemons.data && pokemons.data.map(pokemon => ( <PokemonItem key={ pokemon.id } { ...pokemon }  /> ))
				}
			</ul>
			{/*@formatter:on*/ }
		</>
	);
}