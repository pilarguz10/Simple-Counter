import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

export const SecondsCounter = props => {
	const [timer, setTimer] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(seconds => seconds + 1);
		}, props.seconder);
	}, []);

	return (
		<div className="numeros text-center">
			<span className="cifras">{timer % 10}</span>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconder: PropTypes.number
};
