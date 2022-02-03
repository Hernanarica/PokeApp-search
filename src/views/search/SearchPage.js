import React, { useEffect, useState } from 'react';
import PokemonList from "../../components/PokemonList";
import SearchByTypes from "../../components/search/SearchByTypes";
import Search from "../../components/search/Search";
import { SearchIcon } from "@heroicons/react/solid";

export function SearchPage() {
	const [ pokeNames, setPokeName ] = useState([]);
	
	const [ { data: pokemons, loading, error }, setPokemons ] = useState({
		data: null,
		loading: true,
		error: false
	});
	
	useEffect(() => {
		if (pokeNames.length > 0) {
			setPokemons({
				data: pokeNames,
				loading: false,
				error: false
			});
		}
	}, [ pokeNames ]);
	
	return (
		// @formatter:off
		<div className="min-h-screen p-2 md:p-4 flex flex-col gap-12">
			{/*Form*/ }
			<Search setPokeName={ setPokeName } />
			{/*Form*/ }
			
			{/*select by type*/ }
			<SearchByTypes setPokeName={ setPokeName } />
			{/*select by type*/ }
			
			{/*List*/ }
			<div className="flex items-center justify-center">
				{
					(loading) &&
					(
						<div className="flex items-center gap-2 text-gray-500">
							<span>Empieza a buscar un pokemon</span>
							<SearchIcon className="h-5" />
						</div>
					)
				}
				{
					(pokemons) && <PokemonList pokemons={ pokemons } />
				}
			</div>
			{/*List*/ }
		</div>
		// @formatter:on
	);
}