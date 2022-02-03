import React, { useEffect, useState } from 'react';
import { SearchIcon } from "@heroicons/react/outline";
import { useForm } from "../../hooks/useForm";
import { getPokemonNames } from "../../helpers/getPokemonNames";
import { getPokemonByName } from "../../helpers/getPokemonByName";

function Search({ setPokeName }) {
	const [ pokemonNames, setPokemonNames ] = useState([]);
	
	useEffect(() => {
		getPokemonNames().then(res => {
			setPokemonNames(res);
		});
	}, []);
	
	
	const [ formValues, handleInputChange, cleanForm ] = useForm({
		name: ''
	});
	
	const { name } = formValues;
	
	const handleSubmit = e => {
		e.preventDefault();
		
		if (!name.trim().length > 0) return;
		
		getPokemonByName(name).then(res => {
			setPokeName(res);
		}).catch(e => {
			console.log('No existe el pokemon :(');
		});
		
		cleanForm();
	};
	
	return (
		// @formatter:off
		<form action="#" onSubmit={ handleSubmit } className="relative w-fit rounded mx-auto rounded">
			<input type="text"
			       name="name"
			       placeholder="Search a pokemon"
			       className="w-72 rounded placeholder-gray-500 text-gray-600"
			       autoComplete="off"
			       list="pokemons"
			       onChange={ handleInputChange }
			       value={ name }
			/>
			{
				(pokemonNames.length > 0) && (
					<datalist id="pokemons">
						{
							pokemonNames.map(({ name }) => (<option key={ name } value={ name } />))
						}
					</datalist>
				)
			}
			<button className="absolute right-0 top-0 h-full px-4 flex items-center justify-center bg-blue-600 rounded-r">
				<SearchIcon className="h-4 text-white" />
			</button>
		</form>
		// @formatter:on
	);
}

export default React.memo(Search);