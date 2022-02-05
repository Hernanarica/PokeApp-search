import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getPokemonDetailByID } from "../../helpers/getPokemonDetailByID";
import { typePokemon } from "../../types/typePokemon";
import { DetailItem } from "../../components/detail/DetailItem";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { ReturnButton } from "../../components/utilities/ReturnButton";

export function DetailPage() {
	const [ pokemon, setPokemon ] = useState({
		id: '',
		name: '',
		image: '',
		alt: '',
		types: '',
		stats: ''
	});
	const [ loader, setLoader ]   = useState(true);
	const { id_pokemon }          = useParams();
	const { types }               = pokemon;
	
	useEffect(() => {
		getPokemonDetailByID(id_pokemon).then(r => {
			const [ pokeData ] = r;
			
			setPokemon(pokeData);
			
			setLoader(false);
		});
	}, []);
	
	return (
		// @formatter:off
		<div className="relative h-screen flex justify-center items-center p-2" style={{ background: typePokemon[types[0]] }}>
			<ReturnButton />
			{
				(!loader) && <DetailItem { ...pokemon } />
			}
			{
				(loader) && <div className="loader loader-pokeball is-active"></div>
			}
		</div>
		// @formatter:on
	);
}