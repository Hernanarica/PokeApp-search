import React, { useEffect, useState } from 'react';
import PokemonList from "../../components/PokemonList";
import SearchByTypes from "../../components/search/SearchByTypes";
import Search from "../../components/search/Search";
import { InformationCircleIcon, SearchIcon } from "@heroicons/react/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { getNextPokemon } from "../../helpers/getNextPokemon";
import { getPrevPokemon } from "../../helpers/getPrevPokemon";

export function SearchPage() {
	const [ counterPaginator, setCounterPaginator ]                = useState(0);
	const [ loader, setLoader ]                                    = useState(false);
	const [ { data: pokemons, hasPaginator, error }, setPokemons ] = useState({
		data: [],
		hasPaginator: false,
		error: false
	});
	
	useEffect(() => {
		if (pokemons.length > 0) {
			setPokemons({
				data: pokemons,
				hasPaginator,
				error: false
			});
		}
	}, [ pokemons ]);
	
	const handlePrev = () => {
		if (counterPaginator < 15) return;
		
		setLoader(true);
		
		setCounterPaginator(counterPaginator - 15);
	};
	
	const handleNext = () => {
		setLoader(true);
		setCounterPaginator(counterPaginator + 15);
	};
	
	useEffect(() => {
		getNextPokemon(counterPaginator).then(r => {
			setPokemons({
				data: r,
				hasPaginator: true,
				error: false
			});
		}).catch(() => {
			setPokemons({
				data: [],
				hasPaginator: false,
				error: true
			});
		}).finally(() => {
			setLoader(false);
		});
	}, [ counterPaginator ]);
	
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
				{/*{*/}
				{/*	(pokemons.length === 0 && !error) &&*/}
				{/*	(*/}
				{/*		<div className="flex items-center gap-2 text-gray-500">*/}
				{/*			<span>Empieza a buscar un pokemon</span>*/}
				{/*			<SearchIcon className="h-5" />*/}
				{/*		</div>*/}
				{/*	)*/}
				{/*}*/}
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
			
			{
				(hasPaginator) && (
					<div className="flex flex-col items-center">
						<div className="inline-flex gap-1 mt-2 xs:mt-0">
							<button onClick={ handlePrev }
							        className={`flex gap-2 items-center py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-l ${ counterPaginator === 0 ? 'cursor-not-allowed' +
								        ' opacity-50' : 'hover:bg-blue-900'}`}
							>
								<ChevronLeftIcon className="h-5" />
								Prev
							</button>
							<button onClick={ handleNext }
							        className="flex gap-2 items-center py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-r border-0 border-l border-none hover:bg-blue-900">
								Next
								<ChevronRightIcon className="h-5" />
							</button>
						</div>
					</div>
				)
			}
			
			{/*List*/ }
		</div>
		// @formatter:on
	);
}