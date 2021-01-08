import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

export const SecondsCounter = props => {
	const [contador, setContador] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setContador(seconds => seconds + 1);
		}, props.seconder);
	}, []);

	return (
		<div className="numeros text-center">
			<span className="cifras">{contador % 10}</span>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconder: PropTypes.number
};
