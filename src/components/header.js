import { React } from "react";
import { HeaderPage } from "./headerPage";
import { HeaderHome } from "./headerHome";
import { Nav } from "./nav";
import { useLocation } from "react-router";

export const Header = () => {
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
