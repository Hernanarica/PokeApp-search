import React from 'react';

export function Badge({ type }) {
	return <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{ type }</span>;
}