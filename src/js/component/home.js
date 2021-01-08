import React from "react";

import { SecondsCounter } from "./SecondsCounter.jsx";

export function Home() {
	const numeroCifras = 4;
	const items = [];
	const ceros = [1000000, 100000, 10000, 1000];
	for (let i = 0; i < numeroCifras; i++) {
		items.push(<SecondsCounter seconder={ceros[i]} />);
	}

	return (
		<div id="app">
			<div className="mt-5 d-flex justify-content-center">{items}</div>
		</div>
	);
}
