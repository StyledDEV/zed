import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ logo, altText }) {
	return (
		<div className="logo section__sidebar__logo">
			<Link to="/">
				<img className="logo__img" src={logo} alt={altText} />
			</Link>
		</div>
	);
}
