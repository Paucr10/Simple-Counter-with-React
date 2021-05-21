import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const ClockStyles = {
	fontSize: "50px",
	color: "blue",
	padding: "10px"
};

const centerStyles = {
	margin: "0 auto"
};

export function SecondsCounter(props) {
	return (
		<div className="d-flex flex-row bg-info">
			<div className="d-flex flex-row" style={centerStyles}>
				<div className="pt-3">
					<i style={ClockStyles} className="far fa-clock"></i>
				</div>
				<div style={ClockStyles}>{props.four % 10}</div>
				<div style={ClockStyles}>{props.three % 10}</div>
				<div style={ClockStyles}>{props.two % 10}</div>
				<div style={ClockStyles}>{props.one % 10}</div>
			</div>
		</div>
	);
}

SecondsCounter.Prototypes = {
	four: PropTypes.number,
	three: PropTypes.number,
	two: PropTypes.number,
	one: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const N_four = Math.floor(counter / 1000);
	const N_three = Math.floor(counter / 100);
	const N_two = Math.floor(counter / 10);
	const N_one = Math.floor(counter / 1);

	console.log(N_four, N_three, N_two, N_one);
	counter++;

	ReactDOM.render(
		<SecondsCounter
			four={N_four}
			three={N_three}
			two={N_two}
			one={N_one}
		/>,
		document.querySelector("#app")
	);
}, 1000);
