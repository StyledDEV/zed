import React, { useState } from "react";
import "./Styles/Sass/App.scss";
import Section from "./components/Section";
import { ZedBg, Logo } from "./data/Images";
import { ComboData } from "./data/Combos";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
	const [combos] = useState(ComboData || []);

	const findCombo = (id) => {
		id = parseInt(id);
		const combo = combos.find((item) => item.id === id);
		return combo.id;
	};

	const includeClass = (el, className) => el.classList.contains(className);

	const showCombo = (combo) => {
		if (!includeClass(combo, "active")) {
			combo.classList.add("active");
		}

		let comboSiblings = combo.parentElement.parentElement.children;
		comboSiblings = Array.from(comboSiblings).filter((sibling) => {
			const current = sibling.children[0];
			return current !== combo;
		});

		comboSiblings.forEach((sibling) => {
			let current = sibling.children[0];
			if (current !== combo && includeClass(current, "active"))
				current.classList.remove("active");
		});
	};

	const toggleSidebar = (button, event) => {
		const sidebar = button.nextSibling;
		button.classList.toggle("active");
		sidebar.classList.toggle("active");
	};

	return (
		<Router>
			<div className="wrapper">
				<Route
					path="/"
					exact
					render={() => (
						<Section
							bg={ZedBg}
							logo={Logo}
							sliderItems={combos}
							showCombo={showCombo}
							toggleSidebar={toggleSidebar}
						/>
					)}
				/>

				<Route
					path="/combo/:id"
					exact
					render={(props) => {
						const paramId = props.match.params.id;
						return (
							<Section
								bg={ZedBg}
								logo={Logo}
								sliderItems={combos}
								showCombo={showCombo}
								comboId={findCombo(paramId)}
								toggleSidebar={toggleSidebar}
							/>
						);
					}}
				/>
			</div>
		</Router>
	);
}
