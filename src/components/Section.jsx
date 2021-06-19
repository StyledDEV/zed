import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default function Section({ bg, logo, sliderItems, showCombo, comboId }) {
	return (
		<section className={`section ${bg && bg}`}>
			<div className="section__content">
				<Sidebar
					logo={logo}
					sliderItems={sliderItems}
					comboId={comboId}
					showCombo={showCombo}
				/>

				<MainContent sliderItems={sliderItems} comboId={comboId} />
			</div>
		</section>
	);
}
