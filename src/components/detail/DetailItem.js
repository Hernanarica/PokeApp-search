import React from 'react';
import { Badge } from "../utilities/Badge";
import { Stat } from "../utilities/Stat";

export function DetailItem({ id, name, image, alt, types, stats }) {
	return (
		<div className="relative detail-item rounded-xl border border-gray-400 shadow overflow-hidden">
			<div className="detail-item__container-1"></div>
			<img src={ image } alt={ alt } className="absolute top-20 left-20 w-32 detail-item__image animate__animated animate__fadeIn" />
			<div className="flex items-center gap-2 absolute top-0 left-0">
				{
					types.map(type => (<Badge key={ type } type={ type } className="" />))
				}
			</div>
			<div className="detail-item__container-2 bg-white">
				<h2 className="font-medium text-xl mt-12">{ name }</h2>
			</div>
			<div className="detail-item__container-3 bg-white border-t border-t-gray-400">
				{
					stats.map(stat => (<Stat key={ stat.stat.name } stats={ stat } />))
				}
			</div>
		</div>
	);
}