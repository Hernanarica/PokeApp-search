import React, { useEffect, useState } from 'react';
import { SearchIcon } from "@heroicons/react/outline";
import { useForm } from "../../hooks/useForm";
import { getPokemonNames } from "../../helpers/getPokemonNames";
import { getPokemonByName } from "../../helpers/getPokemonByName";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

function Search({ setPokemons, setLoader }) {
	const [ pokemonNames, setPokemonNames ]            = useState([]);
	const navigate                                     = useNavigate();
	const location                                     = useLocation();
	const { s = '' }                                   = queryString.parse(location.search);
	const [ formValues, handleInputChange, cleanForm ] = useForm({
		name: s
	});
	const { name }                                     = formValues;
	
	useEffect(() => {
		getPokemonNames().then(res => {
			setPokemonNames(res);
		});
	}, []);
	
	
	const handleSubmit = e => {
		e.preventDefault();
		
		if (!name.trim().length > 0) return;
		
		navigate(`?s=${ name }`); // Agregamos un parámetro a la url
		
		setLoader(true);
		
		getPokemonByName(name).then(res => {
			setPokemons({
				data: res,
				error: false
			});
		}).catch(e => {
			setPokemons({
				data: [],
				error: true
			});
		}).finally(() => {
			setLoader(false);
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