import { React, useCallback, useEffect } from "react";
import { HeaderPage } from "./headerPage";
import { HeaderHome } from "./headerHome";
import { Nav } from "./nav";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

export const Header = () => {
	const isHome = useSelector((state) => {
		return state.isHome;
	});

	const { pathname } = useLocation();

	return (
		<>
			<div className="header">
				<div className="container">
					<div className="header-logo">
						<a href="/">
							<img src="../img/main-logo.png" alt="Logo" />
						</a>
					</div>
					<div className="nav-toggle">X</div>
					<Nav />
				</div>
			</div>

			{pathname === "/" ? <HeaderHome /> : <HeaderPage />}
		</>
	);
};
