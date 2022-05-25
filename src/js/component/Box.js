import React from "react";
import PropTypes from "prop-types";

export const Box = (props) => {
	return (
		<div
			className="d-flex"
			style={{
				backgroundColor: props.color,
				width: "28px",
				height: "28px",
				margin: "1px",
			}}
		/>
	);
};

Box.propTypes = {
	color: PropTypes.string,
};
