import React, { useContext } from 'react';
import { KeyIcon, MailIcon } from "@heroicons/react/outline";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import { IMAGES_PATH } from "../../constants/imagesPath";

export function LoginPage() {
	const navigate     = useNavigate();
	const { dispatch } = useContext(AuthContext);
	
	const handleSubmit = e => {
		e.preventDefault();
		
		dispatch({
			type: 'login',
			payload: {
				name: 'Hernán',
				lastname: 'Arica',
				email: 'hernanaricammm@gmail.com',
				password: '1234'
			}
		});
		
		navigate('/');
	};
	
	return (
		<div className="min-h-screen flex justify-center items-center gap-12 px-2 md:p-0">
			<div className="hidden lg:block w-2/6">
				<img src={ IMAGES_PATH('./pikachu.png') } alt="pikachu" className="object-cover w-72" />
			</div>
			<form action="#" method="post" className="lg:w-4/6 max-w-md w-full space-y-10" onSubmit={ handleSubmit }>
				<div className="space-y-8">
					<div>
						<div className="relative mt-1">
							<label htmlFor="email" className="absolute bottom-6 left-8 block mb-2 text-sm font-medium text-gray-900 bg-gray-50">Your Email</label>
							<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
								<MailIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
							</div>
							<input type="email" id="email" name="email"
							       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							       placeholder="name@flowbite.com" autoComplete="off" />
						</div>
					</div>
					<div>
						<div className="relative mt-1">
							<label htmlFor="password" className="absolute bottom-6 left-8 block mb-2 text-sm font-medium text-gray-900 bg-gray-50">Your Password</label>
							<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
								<KeyIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
							</div>
							<input type="password" id="password" name="password"
							       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							       placeholder="1234" autoComplete="off" />
						</div>
					</div>
				</div>
				<button type="submit" className="text-white bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login
				</button>
			</form>
		</div>
	);
}
