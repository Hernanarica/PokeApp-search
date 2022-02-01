import React, { useEffect, useState } from 'react';
import { PokemonItem } from "./PokemonItem";
import { getPokemonByName } from "../helpers/getPokemonByName";
import { InformationCircleIcon, SearchIcon } from "@heroicons/react/outline";

export function PokemonList({ pokeName }) {
	console.log('PokemonList renderizándose');
	
	const [ loader, setLoader ]                              = useState(false);
	const [ { data: pokemon, loading, error }, setPokemons ] = useState({
		data: null,
		loading: true,
		error: false
	});
	
	useEffect(() => {
		
		if (pokeName.length > 0) {
			setLoader(true);
			getPokemonByName(pokeName).then(res => {
				setPokemons({
					data: res,
					loading: false,
					error: false
				});
				setLoader(false);
			}).catch(() => {
				setPokemons({
					data: null,
					loading: true,
					error: true
				});
				setLoader(false);
			});
			
		}
	}, [ pokeName ]);
	
	return (
		<>
			{/*@formatter:off*/}
			{
				(loading && !error) && (
					<div className="flex items-center gap-2 text-gray-500">
						<span>Empieza a buscar un pokemon</span>
						<SearchIcon className="h-5" />
					</div>
				)
			}
			{
				loader && <div className="loader loader-pokeball is-active"></div>
			}
			{
				(error && loading) && (
					<div className="flex items-center justify-center gap-2 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
						<InformationCircleIcon className="h-5"/>
						<span className="font-medium">Pokemon not searching</span>
					</div>
				)
			}
			{
				(!loading && !error)  && (
					<ul className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						{
							pokemon.map(pokeItem => ( <PokemonItem key={ pokeItem.id } { ...pokeItem }  /> ))
						}
					</ul>
				)
			}
			{/*@formatter:on*/ }
		</>
	);
}