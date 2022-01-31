import React, { useEffect, useReducer } from 'react';
import { AppRouter } from "./router/AppRouter";
import { AuthContext } from "./context/AuthContext";
import { authReducer } from "./reducers/authReducer";

const init = () => {
	return JSON.parse(localStorage.getItem('user')) || { logged: false };
};

export function PokeApp() {
	const [ user, dispatch ] = useReducer(authReducer, {}, init);
	
	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));
	}, [ user ]);
	
	return (
		// @formatter:off
		<AuthContext.Provider value={ {user, dispatch} }>
			<AppRouter />
		</AuthContext.Provider>
		// @formatter:on
	);
}