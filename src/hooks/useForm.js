import { useState } from 'react';

export function useForm(initialState) {
	const [ formValues, setForm ] = useState(initialState);
	
	const handleInputChange = ({ target }) => {
		setForm({
			...formValues,
			[target.name]: target.value
		});
	};
	
	const cleanForm = () => {
		setForm({
			name: ''
		});
	};
	
	return [ formValues, handleInputChange, cleanForm ];
}