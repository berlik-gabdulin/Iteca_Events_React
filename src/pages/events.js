import { useEffect } from "react";

export const Events = () => {
	useEffect(() => console.log("Events"), []);
	return (
		<>
			<section className="events-cards">
				<div className="container">
					<div className="cards">
						<div className="cards-item">
							<img src="../img/events-card1.jpg" alt="" />
							<a className="cards-item__text" href="/">
								Building & Construction
							</a>
						</div>
						<div className="cards-item">
							<img src="../img/events-card2.jpg" alt="" />
							<a className="cards-item__text" href="/">
								Oil & Gas
							</a>
						</div>
						<div className="cards-item">
							<img src="../img/events-card3.jpg" alt="" />
							<a className="cards-item__text" href="/">
								Power & Water
							</a>
						</div>
						<div className="cards-item">
							<img src="../img/events-card4.jpg" alt="" />
							<a className="cards-item__text" href="/">
								Food & Hospitality
							</a>
						</div>
						<div className="cards-item">
							<img src="../img/events-card5.jpg" alt="" />
							<a className="cards-item__text" href="/">
								Beauty
							</a>
						</div>
						<div className="cards-item">
							<img src="../img/events-card6.jpg" alt="" />
							<a className="cards-item__text" href="/">
								Defence & Security
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
