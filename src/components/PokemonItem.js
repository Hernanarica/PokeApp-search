import React from 'react';

export function PokemonItem({ id, name, image, alt, types }) {
	return (
		<div className="animate__animated animate__fadeIn">
			<div>
				<strong>type: { types }</strong>
			</div>
			<span>{ id }</span>
			<p>{ name }</p>
			<img src={ image } alt={ alt } />
			<a href={ image } target="_blank">name</a>
		</div>
	);
}