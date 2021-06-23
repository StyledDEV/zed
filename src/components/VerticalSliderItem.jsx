import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function VerticalSliderItem({
	img,
	imgAlt,
	itemTitle,
	showCombo,
	comboId,
	selectedComboId,
}) {
	const sliderItemRef = useRef(null);

	return (
		<>
			<Link to={`/combo/${comboId}`}>
				<div
					ref={sliderItemRef}
					className={`vertical-slider__item section__sidebar__vertical-slider__item ${
						comboId === selectedComboId ? "active" : ""
					}`}
					title={itemTitle}
					onClick={() => showCombo(sliderItemRef.current)}>
					<img
						className="vertical-slider__item__img"
						src={img}
						alt={imgAlt}
						draggable="false"
					/>
				</div>
			</Link>
		</>
	);
}
