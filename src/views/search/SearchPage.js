import React, { useEffect, useState } from 'react';
import PokemonList from "../../components/PokemonList";
import SearchByTypes from "../../components/search/SearchByTypes";
import Search from "../../components/search/Search";
import { InformationCircleIcon, SearchIcon } from "@heroicons/react/solid";

export function SearchPage() {
	const [ loader, setLoader ]                      = useState(false);
	const [ { data: pokemons, error }, setPokemons ] = useState({
		data: [],
		error: false
	});
	
	useEffect(() => {
		if (pokemons.length > 0) {
			setPokemons({
				data: pokemons,
				error: false
			});
		}
	}, [ pokemons ]);
	
	return (
		// @formatter:off
		<div className="min-h-screen p-2 md:p-4 flex flex-col gap-12">
			{/*Form*/ }
			<Search setPokemons={ setPokemons } setLoader={ setLoader } />
			{/*Form*/ }
			
			{/*select by type*/ }
			<SearchByTypes setPokemons={ setPokemons } setLoader={ setLoader } />
			{/*select by type*/ }
			
			{/*List*/ }
			<div className="flex items-center justify-center">
				{
					(pokemons.length === 0 && !error) &&
					(
						<div className="flex items-center gap-2 text-gray-500">
							<span>Empieza a buscar un pokemon</span>
							<SearchIcon className="h-5" />
						</div>
					)
				}
				{
					(pokemons.length > 0) && <PokemonList pokemons={ pokemons } />
				}
				{
					(error) &&
					(
						<div className="flex items-center justify-center gap-2 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
							<InformationCircleIcon className="h-5"/>
							<span className="font-medium">Pokemon not searching</span>
						</div>
					)
				}
				{
					(loader) && <div className="loader loader-pokeball is-active"></div>
				}
			</div>
			{/*List*/ }
		</div>
		// @formatter:on
	);
}