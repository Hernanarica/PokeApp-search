import React from 'react';
import { useFetch } from "../../hooks/useFetch";
import { getAllPokemons } from "../../helpers/getAllPokemons";
import { getAllPaginationPokemons } from "../../helpers/getAllPaginationPokemons";

function SearchByTypes({ setPokemons, setLoader }) {
	const { data: categories } = useFetch('https://pokeapi.co/api/v2/type/');
	
	const handleSelectType = e => {
		e.preventDefault();
		
		setLoader(true);
		
		const name = e.target.textContent;
		
		getAllPokemons(150).then(r => {
			const pokemonByTypeFilter = r.filter(poke => poke.types.includes(name));
			setPokemons({
				data: pokemonByTypeFilter,
				error: false
			});
			setLoader(false);
		}).catch(() => {
			setPokemons({
				data: [],
				error: true
			});
		});
		
	};
	
	const handleGetAll = () => {
		setLoader(true);
		getAllPaginationPokemons().then(r => {
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
	};
	
	return (
		<div className="w-full flex justify-center">
			<div className="inline-flex gap-2 max-w-xl p-1 rounded-full overflow-x-scroll" id="search-type">
				<button type="button" onClick={ handleGetAll }
				        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
					All
				</button>
				{
					categories.map((category, i) => (
						<button type="button" key={ category } onClick={ handleSelectType }
						        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
							{ category }
						</button>
					))
				}
			</div>
		</div>
	);
}

export default React.memo(SearchByTypes);