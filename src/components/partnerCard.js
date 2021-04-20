import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Partner = ({ data }) => {
	const [partners, setPartners] = useState([]);

	console.log("data", data);

	useEffect(() => {
		setPartners(data);
	}, [data]);

	return partners.map((partner, index) => {
		const description = partner.description.split("<br />");

		return (
			<Item key={index}>
				<ItemCard>
					<ItemCardTitle>
						<img src={partner.logo_url} alt="" />
						<p>{partner.partners_name}</p>
					</ItemCardTitle>
					<ItemCardText>
						{description.map((text, index) => {
							if (text !== "") {
								return <p key={index}>{text}</p>;
							}
						})}
					</ItemCardText>
					<ItemCardLink
						href={partner.website_link}
						nofollow="nofollow"
						rel="noreferrer"
						target="_blank"
					>
						Go to website
					</ItemCardLink>
				</ItemCard>
				<ItemImg>
					<img src={partner.photo_url} alt="" />
				</ItemImg>
			</Item>
		);
	});
};

const Item = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 80px;
`;

const ItemCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	max-width: 586px;
	min-height: 619px;
	padding-bottom: 100px;
	width: 100%;
	background: linear-gradient(
		178.7deg,
		rgba(34, 34, 34, 0.6) -28.71%,
		rgba(15, 126, 134, 0.36) 103.8%,
		rgba(255, 255, 255, 0.18) 103.8%
	);
	backdrop-filter: blur(10px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.3);
`;

const ItemCardTitle = styled.div`
	position: relative;
	font-family: "Gilroy", sans-serif;
	font-weight: 900;
	font-size: 28px;
	color: #fff;
	max-width: 416px;
	display: flex;
	align-items: center;
	padding-left: 25px;
	margin-top: 40px;
	&::before {
		position: absolute;
		content: "";
		max-width: 416px;
		width: 100%;
		min-height: 100px;
		height: 100%;
		border-radius: 0 10px 10px 0;
		background: linear-gradient(
			89.37deg,
			rgba(255, 255, 255, 0.6) 0.54%,
			rgba(255, 255, 255, 0) 278.96%
		);
		border: 1px solid rgba(255, 255, 255, 0.3);
		box-sizing: border-box;
		backdrop-filter: blur(12px);
		z-index: -1;
		left: 0;
		top: 0;
	}

	img {
		margin-right: 15px;
		max-height: 60px;
		max-width: 100px;
	}
`;

const ItemCardText = styled.div`
	margin: 0 auto;
	margin-top: 30px;
	max-width: 480px;
	width: 100%;
	text-align: justify;
	padding: 0 25px;
	color: #fff;
	letter-spacing: 0.1em;
	font-weight: 500;
	font-size: 16px;
	line-height: 140%;
`;

const ItemCardLink = styled.a`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	bottom: 35px;
	right: 35px;
	max-width: 207px;
	width: 100%;
	height: 45px;
	background: rgba(255, 255, 255, 0.7);
	border: 1px solid #f9ffff;
	box-sizing: border-box;
	border-radius: 10px;
	text-decoration: none;
	color: #0f7e86;
	font-weight: 500;
	font-size: 18px;
	transition: 0.3s;
	&:hover {
		box-shadow: 0 0px 30px 3px #0f7e8655;
	}
`;

const ItemImg = styled.div`
	margin-left: -40px;
	filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.4));
	z-index: -1;
	width: 100%;
	img {
		max-width: 605px;
		width: 100%;
		height: 503px;
		object-fit: cover;
		border-radius: 10px;
	}
`;
