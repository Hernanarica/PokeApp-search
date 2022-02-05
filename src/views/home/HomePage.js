import React from 'react';
import { Hero } from "../../components/home/Hero";

export function HomePage() {
	return (
		<>
			<Hero />
			<div className="p-6 md:p-4 max-w-7xl mx-auto">
				<h2 className="text-2xl font-medium mb-6">Ligas y medallas</h2>
				<div className="flex justify-start sm:justify-between flex-wrap">
					<div>
						<h3 className="text-sm font-medium mb-6 bg-blue-200 text-blue-600 rounded-lg w-fit px-3 py-1">Kanto</h3>
						<ol className="relative border-l border-gray-200">
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_roca.png" alt="medalla roca" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Roca</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Plateada | Brock</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_cascada.png" alt="medalla cascada" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Cascada</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Celeste | Misty</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_trueno.png" alt="medalla trueno" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Trueno</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Carmín | Lt. Surge</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_arcoiris.png" alt="medalla arcoíris" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Arcoíris</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Azulona | Erika</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_alma.png" alt="medalla alma" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Alma</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Fucsia | Koga Sachiko</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_pantano.png" alt="medalla pantano" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Pantano</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Azafrán | Sabrina</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_Volcan.png" alt="medalla Volcán" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Volcán</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Canela | Blaine</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_Tierra.png" alt="medalla tierra" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Tierra</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Verde | Giovanni Azul</time>
							</li>
						</ol>
					</div>
					<div>
						<h3 className="text-sm font-medium mb-6 bg-blue-200 text-blue-600 rounded-lg w-fit px-3 py-1">Johto</h3>
						<ol className="relative border-l border-gray-200">
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_Cefiro.png" alt="medalla céfiro" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Céfiro</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Malva | Pegaso</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_Colmena.png" alt="medalla colmena" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Colmena</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Azalea | Antón</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_Planicie.png" alt="medalla planicie" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Planicie</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Trigal | Blanca</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_Niebla.png" alt="medalla niebla" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Niebla</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Iris | Morti</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_glaciar.png" alt="medalla glaciar" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Glaciar</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Caoba | Fredo</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_Mineral.png" alt="medalla mineral" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Mineral</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Olivo | Yasmina</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_Tormenta.png" alt="medalla tormenta" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Tormenta</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Orquídea | Aníbal</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_Dragon.png" alt="medalla dragon" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Dragón</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Endríno | Débora</time>
							</li>
						</ol>
					</div>
					<div>
						<h3 className="text-sm font-medium mb-6 bg-blue-200 text-blue-600 rounded-lg w-fit px-3 py-1">Hoenn</h3>
						<ol className="relative border-l border-gray-200">
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_Piedra.png" alt="medalla piedra" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Piedra</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Férrica | Petra</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_Puño.png" alt="medalla puño" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Puño</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Azulina | Marcial</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_Dinamo.png" alt="medalla dinamo" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Dínamo</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Malvalona | Erico</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_Calor.png" alt="medalla calor" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Calor</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Lavacalda | Candela</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_equilibrio.png" alt="medalla equilibrio" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Equilibrio</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Petalia | Norman</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_Pluma.png" alt="medalla pluma" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Pluma</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Arborada | Alana</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_Mente.png" alt="medalla mente" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Mente</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Algraría | Vito y Leti</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src="./img/medals/Medalla_Lluvia.png" alt="medalla lluvia" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Lluvia</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Arrecípolis | Plubio Galano</time>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</>
	);
}