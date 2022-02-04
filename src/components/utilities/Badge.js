import React from 'react';

export function Badge({ type }) {
	return <span className="badge font-semibold px-2.5 py-0.5 rounded">{ type }</span>;
}