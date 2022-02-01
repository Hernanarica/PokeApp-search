import React, { useState } from 'react';
import { PokemonList } from "../../components/PokemonList";
import { SearchByTypes } from "../../components/search/SearchByTypes";
import { Search } from "../../components/search/Search";

export function SearchPage() {
	const [ pokeName, setPokeName ] = useState('');
	
	return (
		// @formatter:off
		<div className="p-2 md:p-4 flex flex-col gap-12">
			{/*Form*/ }
			<Search setPokeName={ setPokeName } />
			{/*Form*/ }
			
			{/*select by type*/ }
			<SearchByTypes />
			{/*select by type*/ }
			
			{/*List*/ }
			<div className="min-h-screen flex items-center justify-center">
				<PokemonList pokeName={ pokeName } />
			</div>
			{/*List*/ }
		</div>
		// @formatter:on
	);
}