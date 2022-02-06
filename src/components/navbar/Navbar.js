import React, { useContext, useRef } from 'react';
import { LogoutIcon, MenuAlt1Icon } from "@heroicons/react/outline";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { IMAGES_PATH } from "../../constants/imagesPath";

export function Navbar() {
	const { dispatch } = useContext(AuthContext);
	const navigate     = useNavigate();
	// Variables del DOM
	const menu         = useRef();
	
	
	const handleLogout = e => {
		e.preventDefault();
		
		dispatch({
			type: 'logout'
		});
		
		navigate('/login');
	};
	
	const handleMenu = () => {
		menu.current.classList.toggle('hidden');
	};
	
	return (
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<Link to="/" className="flex gap-1 items-center">
					<img src={ IMAGES_PATH('./pokebola.png') } alt="pokebola" width="32" />
					<span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">PokeApp</span> </Link>
				<button className="md:hidden border-2 rounded-md p-1 text-gray-600" onClick={ handleMenu }>
					<MenuAlt1Icon className="h-6" />
				</button>
				<div className="hidden w-full md:block md:w-auto" id="mobile-menu" ref={ menu }>
					<ul className="flex flex-col space-y-4 md:space-y-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
						<li>
							<NavLink to="/" className={ ({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-700' }>Home</NavLink>
						</li>
						<li>
							<NavLink to="/search" className={ ({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-700' }>Search</NavLink>
						</li>
						<li>
							<button className="flex items-center gap-1 text-gray-700 hover:lg:text-red-600 font-medium" onClick={ handleLogout }>
								<LogoutIcon className="h-5" /> Logout
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}