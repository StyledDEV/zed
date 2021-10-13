import React from "react";
import Logo from "./Logo";
import VerticalSlider from "./VerticalSlider";

export default function Sidebar({ logo, sliderItems, comboId, showCombo }) {
	return (
		<div className="sidebar section__sidebar">
			<Logo logo={logo} altText="Zed logo" />

			<div className="section__sidebar__content">
				<div className="section__sidebar__headline">
					<span className="section__sidebar__headline__text">
						List of combos
					</span>
				</div>

				<VerticalSlider
					sliderItems={sliderItems}
					comboId={comboId}
					showCombo={showCombo}
				/>
			</div>
		</div>
	);
}
