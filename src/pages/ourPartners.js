import { useEffect, useState } from "react";
import { Partner } from "../components/partnerCard";

export const OurPartners = () => {
	const [partners, setPartners] = useState([]);
	const [orgs, setOrgs] = useState([]);

	const getPartners = async () => {
		const partners = await fetch(
			"http://dev.ica-eurasia.com/wp-json/acf/v3/pages/19"
		)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				const orgs = res.acf.partners_info.filter(
					(item) => item.partner_type.value === "coOrganizer"
				);
				console.log(orgs);
				const partners = res.acf.partners_info.filter(
					(item) => item.partner_type.value === "partner"
				);
				setOrgs(orgs);
				setPartners(partners);
			});
		return partners;
	};

	useEffect(() => {
		getPartners();
	}, []);

	return (
		<section className="partners-group group">
			<div className="container">
				<div className="wrapper">
					<div className="group__title">CO-ORGANISERS</div>
					{orgs ? <Partner data={orgs} /> : null}
				</div>
				<div className="wrapper">
					<div className="group__title">PARTNERS</div>
					{partners ? <Partner data={partners} /> : null}
				</div>
			</div>
		</section>
	);
};
