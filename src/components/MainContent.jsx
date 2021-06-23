import React from "react";

export default function MainContent({ sliderItems, comboId }) {
	const selectedCombo =
		sliderItems.find((item) => item.id === comboId) || false;
	if (selectedCombo) {
		document.title = `Combo ${selectedCombo.id} - Zed Combos`;
	}

	return (
		<div className="section__main-content">
			{selectedCombo ? (
				<>
					<h2 className="title section__main-content__title featured-text">
						{selectedCombo.name} {selectedCombo.id}
					</h2>
					<ul className="section__main-content__list">
						<li className="section__main-content__list__item">
							Number: {selectedCombo.id}
						</li>
						<li className="section__main-content__list__item">
							Difficulty: {selectedCombo.difficulty}
						</li>
					</ul>
					{selectedCombo.videoId && (
						<iframe
							className="section__main-content__video"
							width="400"
							height="250"
							src={`https://youtube.com/embed/${selectedCombo.videoId}`}
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen></iframe>
					)}

					{selectedCombo.steps && (
						<div className="section__main-content__skills">
							<h2 className="title medium section__main-content__skills__title">
								Steps
							</h2>
							<div className="section__main-content__skills__content">
								{selectedCombo.steps.map((step, index) => {
									step.skillName =
										step.skillName.charAt(0).toUpperCase() +
										step.skillName.slice(1);
									return (
										<div
											key={index}
											className={`section__main-content__skills__item ${
												step.skillName === "AA" ? "sword" : ""
											}`}>
											{step.skillName !== "AA" && (
												<div class="section__main-content__skills__item__border"></div>
											)}
											<img
												key={index}
												src={step.skillImage}
												alt={step.skillName}
												title={`Spell: ${step.skillName}`}
												draggable="false"
											/>
										</div>
									);
								})}
							</div>
						</div>
					)}
				</>
			) : (
				<div className="section__main-content__text">
					<h1 className="title section__main-content__title">
						Learn <span className="featured-text">Zed Combos</span>
					</h1>
					<p className="desc section__main-content__desc">
						Switch each combo in the{" "}
						<span className="featured-text">left side section</span> to see more
						info
					</p>
					<button className="button">Explore</button>
				</div>
			)}
		</div>
	);
}
