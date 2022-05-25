import React, { useState, useEffect } from "react";
import { Row } from "./Row";

export const RubikSheet = (props) => {
	// declaraciones (ganchos...);
	function buildRubikSheet() {
		const rubik = [];
		const rowsPerRubik = Math.floor(Math.random() * 30 + 1);
		const boxesPerRow = Math.floor(Math.random() * 30 + 1);
		const colors = ["red", "#fff", "yellow", "green", "blue", "orange"];
		for (let i = 0; i < rowsPerRubik; i++) {
			const boxes = [];
			for (let j = 0; j < boxesPerRow; j++) {
				const box = {
					color: colors[Math.floor(Math.random() * colors.length)],
				};
				boxes.push(box);
				// boxes.push(colors[Math.floor(Math.random() * colors.length)]);
			}
			rubik.push(boxes);
		}
		return rubik;
	}
	const [currentRubik, setCurrentRubik] = useState(buildRubikSheet());
	const [mounted, setMounted] = useState();
	useEffect(() => {
		if (!mounted) {
			setTimeout(() => {
				setCurrentRubik(buildRubikSheet());
			}, 2000);
			setMounted(true);
		}
	}, [mounted, buildRubikSheet]);
	// renderizado; lo que devuelve el componente
	return (
		<div className="d-flex flex-column flex-nowrap w-auto">
			{currentRubik.map((row, index) => {
				return <Row key={index} boxes={row} />;
			})}
		</div>
	);
};
