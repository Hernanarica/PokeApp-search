import React, { useEffect, useState } from 'react';
import PokemonItem from "./PokemonItem";
import { InformationCircleIcon, SearchIcon } from "@heroicons/react/outline";

function PokemonList({ pokemons }) {
	const [ loader, setLoader ] = useState(false);
	
	return (
		<>
			{/*@formatter:off*/ }
			{
				<ul className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{
						pokemons.map(pokeItem => ( <PokemonItem key={ pokeItem.id } { ...pokeItem }  /> ))
					}
				</ul>
			}
			{/*@formatter:on*/ }
		</>
	);
}

export default React.memo(PokemonList);