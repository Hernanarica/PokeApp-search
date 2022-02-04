import React from 'react';
import PokemonItem from "./PokemonItem";

function PokemonList({ pokemons }) {
	return (
		<>
			{/*@formatter:off*/}
			{
				<ul className="grid-pokemons">
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