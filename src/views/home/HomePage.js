import React from 'react';
import { Hero } from "../../components/home/Hero";
import { IMAGES_PATH } from "../../constants/imagesPath";

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
									<img src={ IMAGES_PATH('./medals/Medalla_Roca.png') } alt="medalla roca" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Roca</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Plateada | Brock</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Cascada.png') } alt="medalla cascada" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Cascada</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Celeste | Misty</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Trueno.png') } alt="medalla trueno" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Trueno</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Carm??n | Lt. Surge</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Arcoiris.png') } alt="medalla arco??ris" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Arco??ris</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Azulona | Erika</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Alma.png') } alt="medalla alma" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Alma</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Fucsia | Koga Sachiko</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Pantano.png') } alt="medalla pantano" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Pantano</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Azafr??n | Sabrina</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Volcan.png') } alt="medalla Volc??n" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Volc??n</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Canela | Blaine</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Tierra.png') } alt="medalla tierra" className="w-4 h-4 text-blue-600" />
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
									<img src={ IMAGES_PATH('./medals/Medalla_Cefiro.png') } alt="medalla c??firo" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla C??firo</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Malva | Pegaso</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Colmena.png') } alt="medalla colmena" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Colmena</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Azalea | Ant??n</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Planicie.png') } alt="medalla planicie" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Planicie</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Trigal | Blanca</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Niebla.png') } alt="medalla niebla" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Niebla</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Iris | Morti</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Glaciar.png') } alt="medalla glaciar" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Glaciar</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Caoba | Fredo</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Mineral.png') } alt="medalla mineral" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Mineral</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Olivo | Yasmina</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Tormenta.png') } alt="medalla tormenta" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Tormenta</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Orqu??dea | An??bal</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Dragon.png') } alt="medalla dragon" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Drag??n</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Endr??no | D??bora</time>
							</li>
						</ol>
					</div>
					<div>
						<h3 className="text-sm font-medium mb-6 bg-blue-200 text-blue-600 rounded-lg w-fit px-3 py-1">Hoenn</h3>
						<ol className="relative border-l border-gray-200">
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Piedra.png') } alt="medalla piedra" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Piedra</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de F??rrica | Petra</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Pu??o.png') } alt="medalla pu??o" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Pu??o</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Azulina | Marcial</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Dinamo.png') } alt="medalla dinamo" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla D??namo</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Malvalona | Erico</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Calor.png') } alt="medalla calor" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Calor</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Lavacalda | Candela</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Equilibrio.png') } alt="medalla equilibrio" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Equilibrio</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Petalia | Norman</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Pluma.png') } alt="medalla pluma" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Pluma</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Arborada | Alana</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Mente.png') } alt="medalla mente" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Mente</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Algrar??a | Vito y Leti</time>
							</li>
							<li className="mb-10 ml-6">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
									<img src={ IMAGES_PATH('./medals/Medalla_Lluvia.png') } alt="medalla lluvia" className="w-4 h-4 text-blue-600" />
								</span>
								<h3 className="mb-1 text-lg font-semibold text-gray-900">Medalla Lluvia</h3>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400">Gimnasio de Arrec??polis | Plubio Galano</time>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</>
	);
}