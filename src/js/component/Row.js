import React from "react";
import { Box } from "./Box";
import PropTypes from "prop-types";

export const Row = ({ boxes, ...props }) => {
	return (
		<div className="d-flex w-auto">
			{boxes.map((box, index) => {
				return <Box key={index} color={box.color} />;
			})}
		</div>
	);
};

Row.propTypes = {
	boxes: PropTypes.arrayOf(PropTypes.object),
};
