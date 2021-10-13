import React, { useRef } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default function Section({
	bg,
	logo,
	sliderItems,
	showCombo,
	comboId,
	toggleSidebar,
}) {
	const sidebarMenuButtonRef = useRef(null);
	return (
		<section className={`section ${bg ? bg : ""}`}>
			<div className="section__content">
				<div
					ref={sidebarMenuButtonRef}
					className="sidebar-menu-button"
					onClick={() => toggleSidebar(sidebarMenuButtonRef.current)}></div>
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
