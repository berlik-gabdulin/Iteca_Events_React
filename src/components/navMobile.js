import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MobileMenu = () => {
	const [mobileNav, setMobileNav] = useState(false);

	const getMobileNav = () => {
		setMobileNav(!mobileNav);
		// console.log(mobileNav);
	};
	return (
		<>
			{mobileNav ? (
				<Menu onClick={getMobileNav}>
					<ul>
						<li>
							<Link to="/">HOME</Link>
						</li>
						<li>
							<Link to="/about-us">ABOUT US</Link>
						</li>
						<li>
							<Link to="/events">EVENTS</Link>
						</li>
						<li>
							<Link to="/our-global-network">OUR GLOBAL NETWORK</Link>
						</li>
						<li>
							<Link to="/our-partners">OUR PARTNERS</Link>
						</li>
						<li>
							<Link to="/contacts">CONTACTS</Link>
						</li>
					</ul>
				</Menu>
			) : null}
			<ToggleBtn
				onClick={getMobileNav}
				className={`${mobileNav ? "active" : ""}`}
			>
				<span className="top"></span>
				<span className="center"></span>
				<span className="bottom"></span>
			</ToggleBtn>
		</>
	);
};

const Menu = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100vh;
	width: 100vw;
	display: none;
	justify-content: center;
	align-items: center;
	background-color: #0007;
	backdrop-filter: blur(15px);
	z-index: 999;
	@media (max-width: 768px) {
		display: flex;
	}
	ul {
		list-style-type: none;
		padding: 0;
		li {
			a {
				display: flex;
				padding: 5px 0;
				font-size: 20px;
				color: #fff;
				text-decoration: none;
			}
		}
	}
`;
const ToggleBtn = styled.div`
	display: none;
	position: fixed;
	width: 20px;
	height: 20px;
	top: 40px;
	right: 30px;
	cursor: pointer;
	z-index: 1000;
	transform: translateY(-50%);
	@media (max-width: 768px) {
		display: flex;
	}
	&:before {
		content: "";
		display: flex;
		position: absolute;
		width: 40px;
		height: 40px;
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-left: none;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0.75) 0%,
			rgba(255, 255, 255, 0.15) 156.04%
		);
		-webkit-backdrop-filter: blur(15px);
		backdrop-filter: blur(15px);
	}
	span {
		display: block;
		position: absolute;
		width: 100%;
		height: 2px;
		background: #433936;
		transition: 0.3s;
		&.top {
			top: 2px;
		}
		&.center {
			top: 9px;
		}
		&.bottom {
			bottom: 2px;
		}
	}
	&:hover {
		.top {
			top: 0;
		}
		.bottom {
			bottom: 0;
		}
	}
	&.active {
		span {
			background: #fff;
		}
		.top {
			top: 10px;
			transform: rotate(315deg);
		}
		.center {
			opacity: 0;
			transform: rotate(-150deg);
		}
		.bottom {
			bottom: 8px;
			transform: rotate(-135deg);
		}
	}
`;
