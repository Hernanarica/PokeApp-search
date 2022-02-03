import React from 'react';
import { EyeIcon } from "@heroicons/react/outline";
import { Badge } from "./utilities/Badge";

function PokemonItem({ name, image, alt, types }) {
	return (
		<li className="animate__animated animate__fadeIn">
			<div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<div className="flex flex-col items-center p-10">
					<img className="mb-3 w-24 h-24 rounded-full shadow-lg object-contain" src={ image } alt={ alt } />
					<h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{ name }</h3>
					<div className="flex gap-2">
						{
							types.map(type => (<Badge key={ type } type={ type } />))
						}
					</div>
					<div className="flex mt-4 space-x-3 lg:mt-6">
						<a href="#"
						   className="inline-flex gap-2 items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							<EyeIcon className="h-4" /> See more
						</a>
					</div>
				</div>
			</div>
		</li>
	);
}

export default React.memo(PokemonItem);