import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthRouter } from "./AuthRouter";
import { AuthContext } from "../context/AuthContext";

export function AuthRoutes() {
	const { user } = useContext(AuthContext);
	
	return (user.logged) ? <AuthRouter /> : <Navigate to="/login" />;
}