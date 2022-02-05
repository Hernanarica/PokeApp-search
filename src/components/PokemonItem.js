import React from 'react';
import { Badge } from "./utilities/Badge";
import { typePokemon } from "../types/typePokemon";
import { Link } from "react-router-dom";

function PokemonItem({ id, name, image, alt, types }) {
	
	return (
		<Link to={ `/pokemon/${ id }` } className="pokemon-card relative animate__animated animate__fadeIn">
			<div className="pokemon-card__wrapper p-2 rounded-lg border border-gray-200 shadow-md" style={ { background: typePokemon[types[0]] } }>
				<div className="pokemon-card__info">
					<img className="absolute pokemon-card__image -top-4 -right-4 w-24 h-24 object-contain" src={ image } alt={ alt } />
					<h3 className="pokemon-card__title text-xl font-medium text-white">{ name }</h3>
					<div className="pokemon-card__types flex gap-2">
						{
							types.map(type => (<Badge key={ type } type={ type } />))
						}
					</div>
				</div>
			</div>
		</Link>
	);
}

export default React.memo(PokemonItem);