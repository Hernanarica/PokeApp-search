import React from 'react';

export function Stat({ stats }) {
	return (
		// @formatter:off
		<div className="detail-item__stat gap-1 p-3">
			<span className="font-medium">{ stats.base_stat }</span>
			<span className="text-xs text-gray-500">{ stats.stat.name }</span>
		</div>
		// @formatter:on
	);
}