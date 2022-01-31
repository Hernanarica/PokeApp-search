import React from 'react';
import { Navbar } from "../components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../views/home/HomePage";
import { SearchPage } from "../views/search/SearchPage";

export function AuthRouter() {
	return (
		<>
			{/*@formatter:off*/}
			<Navbar/>
			<Routes>
				<Route path="/" element={ <HomePage /> }/>
				<Route path="/search" element={ <SearchPage /> }/>
			</Routes>
			{/*@formatter:on*/ }
		</>
	);
}