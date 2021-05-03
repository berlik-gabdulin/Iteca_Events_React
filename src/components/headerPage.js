import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import styled from "styled-components";

export const HeaderPage = () => {
	const [img, setImg] = useState(``);

	const {
		aboutTitle,
		contactsTitle,
		partnersTitle,
		eventsTitle,
		networkTitle,
		aboutImg,
		eventsImg,
		networkImg,
		partnersImg,
		contactsImg,
	} = useSelector(
		({
			about: { page_title: aboutTitle, page_img: aboutImg },
			events: { page_title: eventsTitle, page_img: eventsImg },
			network: { page_title: networkTitle, page_img: networkImg },
			partners: { page_title: partnersTitle, page_img: partnersImg },
			contacts: { page_title: contactsTitle, page_img: contactsImg },
		}) => ({
			aboutTitle,
			contactsTitle,
			eventsTitle,
			networkTitle,
			partnersTitle,
			aboutImg,
			eventsImg,
			networkImg,
			partnersImg,
			contactsImg,
		})
	);

	const { pathname } = useLocation();

	const getTitle = () => {
		switch (pathname) {
			case "/contacts":
				return { pageTitle: contactsTitle, pageImg: contactsImg };
			case "/about-us":
				return { pageTitle: aboutTitle, pageImg: aboutImg };
			case "/events":
				return { pageTitle: eventsTitle, pageImg: eventsImg };
			case "/our-global-network":
				return { pageTitle: networkTitle, pageImg: networkImg };
			case "/our-partners":
				return { pageTitle: partnersTitle, pageImg: partnersImg };
			default:
				return "";
		}
	};

	console.log(getTitle());

	// useEffect(() => setImg(getTitle().pageImg), [getTitle()]);

	return (
		<HeaderWrapper>
			<HeaderBg img={getTitle().pageImg ? getTitle().pageImg : eventsImg} />
			<HeaderBgOverlay />
			<div className="container">
				{getTitle().pageTitle !== "" ? (
					<h3 className="section__title">
						{getTitle().pageTitle ? getTitle().pageTitle : eventsTitle}
					</h3>
				) : null}
			</div>
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled.section`
	position: relative;
	min-height: 45vh;
	z-index: 1;
	overflow: hidden;
`;

const HeaderBg = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: url(${({ img }) => img}) no-repeat center center;
	background-size: cover;
	filter: blur(5px);
	z-index: -2;
`;

const HeaderBgOverlay = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(15, 126, 134, 0.6);
	/* background-color: rgba(63, 35, 25, 0.6); */
	z-index: -1;
`;
