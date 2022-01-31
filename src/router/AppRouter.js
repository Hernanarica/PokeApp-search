import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "../views/login/LoginPage";
import { AuthRouter } from "./AuthRouter";
import { AuthRoutes } from "./AuthRoutes";
import { PublicRoutes } from "./PublicRoutes";

export function AppRouter() {
	return (
		// @formatter:off
			<Router>
				<Routes>
					<Route path="/login" element={
						<PublicRoutes>
							<LoginPage />
						</PublicRoutes>
					}/>
					
					<Route path="*" element={
						<AuthRoutes>
							<AuthRouter />
						</AuthRoutes>
					} />
				</Routes>
			</Router>
		// @formatter:on
	);
}