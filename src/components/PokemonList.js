import React from 'react';
import PokemonItem from "./PokemonItem";

function PokemonList({ pokemons }) {
	return (
		<>
			{/*@formatter:off*/}
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