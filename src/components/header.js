import { React } from "react";
import { Nav } from "./nav";

export const Header = () => {
	return (
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
	);
};
