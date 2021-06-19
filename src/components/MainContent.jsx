import React from "react";

export default function MainContent({ sliderItems, comboId }) {
	const selectedCombo =
		sliderItems.find((item) => item.id === comboId) || false;
	return (
		<div className="section__main-content">
			{selectedCombo ? (
				<>
					<h2 className="title section__main-content__title featured-text">
						{selectedCombo.name}
					</h2>
					<ul className="section__main-content__list">
						<li className="section__main-content__list__item">
							Number: {selectedCombo.id}
						</li>
						<li className="section__main-content__list__item">
							Difficulty: {selectedCombo.difficulty}
						</li>
					</ul>
					{selectedCombo.video && (
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
						<div>
							<h2 className="title medium">Steps</h2>
							<div className="section__main-content__skills">
								{selectedCombo.steps.map((step, index) => (
									<div
										key={index}
										className="section__main-content__skills__item">
										<img
											key={index}
											className="section__main-content__skills__item"
											src={step.skillImage}
											alt={step.skillName}
											title={`Spell: ${step.skillName}`}
										/>
									</div>
								))}
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
