import React from 'react';
import { SearchIcon } from "@heroicons/react/outline";

export function SearchPage() {
	return (
		<div className="p-2 md:p-4">
			<div className="relative w-fit rounded mx-auto rounded">
				<input type="text" placeholder="Search a pokemon" className="w-72 rounded placeholder-gray-500 text-gray-600" />
				<button className="absolute right-0 top-0 h-full px-4 flex items-center justify-center bg-blue-600 rounded-r">
					<SearchIcon className="h-4 text-white" />
				</button>
			</div>
			<div className="min-h-screen flex items-center justify-center gap-2 text-gray-500">
				<span>Empieza a buscar un pokemon</span>
				<SearchIcon className="h-5" />
			</div>
		</div>
	);
}