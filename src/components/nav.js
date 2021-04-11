import { React } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
	return (
		<nav className="header-nav">
			<ul className="navbar">
				<li className="navbar__item">
					<Link to="/">HOME</Link>
				</li>
				<li className="navbar__item">
					<Link to="/about-us">ABOUT US</Link>
				</li>
				<li className="navbar__item">
					<Link to="/events">EVENTS</Link>
				</li>
				<li className="navbar__item">
					<Link to="/our-global-network">OUR GLOBAL NETWORK</Link>
				</li>
				<li className="navbar__item">
					<Link to="/our-partners">OUR PARTNERS</Link>
				</li>
				<li className="navbar__item">
					<Link to="/contacts">CONTACTS</Link>
				</li>
			</ul>
		</nav>
	);
};
