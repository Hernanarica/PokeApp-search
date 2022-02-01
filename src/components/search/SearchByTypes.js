import React from 'react';
import { useFetch } from "../../hooks/useFetch";

export function SearchByTypes() {
	console.log('SearchByTypes renderizándose');
	
	const { data: categories } = useFetch('https://pokeapi.co/api/v2/type/');
	
	return (
		<div className="w-full flex justify-center">
			<div className="inline-flex gap-2 max-w-xl rounded-full overflow-x-scroll" id="search-type">
				{
					categories.map((category, i) => (
						<button type="button" key={ category }
						        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
							{ category }
						</button>
					))
				}
			</div>
		</div>
	);
}