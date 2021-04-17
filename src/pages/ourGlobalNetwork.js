import { useEffect } from "react";
import styled from "styled-components";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import World from "@svg-maps/world";
import { useSelector } from "react-redux";
export const OurGlobalNetwork = () => {
	// const { pageTitle } = useSelector(({ page_title: pageTitle }) => pageTitle);

	useEffect(() => console.log("OurGlobalNetwork"), []);
	return (
		<MapWrapper>
			<SVGMap map={World} />
		</MapWrapper>
	);
};

const MapWrapper = styled.div`
	display: flex;
`;
