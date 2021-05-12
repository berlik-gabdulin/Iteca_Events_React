import { useEffect, useState } from "react";
import styled from "styled-components";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import World from "@svg-maps/world";
import { eurasia, ourNetwork } from "../components/network";
import { useSelector } from "react-redux";
import { Partner } from "../components/partnerCard";

export const OurGlobalNetwork = () => {
	const data = useSelector((state) => {
		return state.partners;
	});
	const [country, setCountry] = useState("Select country");
	const [showPartner, setShowPartner] = useState(false);
	const [curPartner, setCurPartner] = useState([]);

	const ICAWorld = {
		label: "Map of ICA Eurasia",
		viewBox: "0 0 1050 500",
		locations: World.locations.filter((item) => eurasia.includes(item.name)),
	};

	const setClass = () => {
		[...document.querySelectorAll(".svg-map__location")].map((item) => {
			if (ourNetwork.includes(item.getAttribute("name"))) {
				item.classList.add("svg-map__location-ica");
			}
		});
	};

	useEffect(() => {
		setClass();
		getCountry();
	}, []);

	useEffect(() => {
		getPartner();
	}, [country]);

	const getCountry = () => {
		document.querySelector(".svg-map").addEventListener("mouseover", (e) => {
			if (e.target.classList.contains("svg-map__location-ica")) {
				setCountry(e.target.getAttribute("name"));
			}
		});
	};

	const getPartner = () => {
		document.querySelector(".svg-map").addEventListener("click", (e) => {
			if (e.target.classList.contains("svg-map__location-ica")) {
				const partners = data.partners_info.filter((item) => {
					return item.country === country;
				});
				// console.log(partners);
				setCurPartner(partners);
				setShowPartner(true);
			}
		});
	};

	return (
		<div className="container">
			<Title>{country}</Title>
			<MapWrapper>
				<SVGMap map={ICAWorld} />
			</MapWrapper>
			{showPartner ? <Partner data={curPartner} /> : null}
		</div>
	);
};

const MapWrapper = styled.div`
	padding: 30px 0;
	display: flex;
	.svg-map {
		position: relative;
		left: -15%;
		&__location {
			fill: #aeaeae;
			&-ica {
				fill: #00653b;
				:hover {
					fill: #e25306bf;
				}
			}
		}
	}
`;

const Title = styled.h2`
	text-align: center;
	font-size: 32px;
	line-height: 1.4;
	margin: 32px auto 0;
`;
