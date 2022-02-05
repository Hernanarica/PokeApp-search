import React from 'react';
import { Navbar } from "../components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../views/home/HomePage";
import { SearchPage } from "../views/search/SearchPage";
import { DetailPage } from "../views/Detail/DetailPage";

export function AuthRouter() {
	return (
		<>
			{/*@formatter:off*/}
			<Navbar/>
			<Routes>
				<Route path="/" element={ <HomePage /> }/>
				<Route path="/search" element={ <SearchPage /> }/>
				<Route path="/pokemon/:id_pokemon" element={ <DetailPage /> }/>
			</Routes>
			{/*@formatter:on*/ }
		</>
	);
}