import React from "react";
import VerticalSliderItem from "./VerticalSliderItem";

export default function VerticalSlider({ sliderItems, comboId, showCombo }) {
	const selectedCombo =
		sliderItems.find((item) => item.id === comboId) || false;

	return (
		<div className="vertical-slider-container">
			<div className="vertical-slider section__sidebar__vertical-slider">
				{sliderItems.map((item) => (
					<VerticalSliderItem
						key={item.id}
						img={item.image}
						imgAlt={`${item.name} (${item.id}), difficulty: ${item.difficulty}`}
						itemTitle={`${item.name} (${item.id})`}
						showCombo={showCombo}
						comboId={item.id}
						selectedComboId={selectedCombo.id}
					/>
				))}
			</div>
		</div>
	);
}
