import React from 'react';
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

export function ReturnButton() {
	const navigate = useNavigate();
	
	const handleReturnScreen = () => {
		navigate(-1);
	};
	
	return (
		<button type="button"
		        onClick={ handleReturnScreen }
		        className="absolute top-10 left-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
			<ChevronLeftIcon className="h-5" />
		</button>
	);
}