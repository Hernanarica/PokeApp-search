import { useEffect, useState } from 'react';
import { getPokemonByType } from "../helpers/getPokemonByType";

export function useFetch(url) {
	const [ state, setState ] = useState({
		data: [],
		loading: true
	});
	
	useEffect(() => {
		
		getPokemonByType(url).then(data => {
			setState({
				data,
				loading: false
			});
		});
		
	}, [ url ]);
	
	return state;
}