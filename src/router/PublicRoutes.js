import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { LoginPage } from "../views/login/LoginPage";

export function PublicRoutes() {
	const { user } = useContext(AuthContext);
	
	return (user.logged) ? <Navigate to="/" /> : <LoginPage />;
}