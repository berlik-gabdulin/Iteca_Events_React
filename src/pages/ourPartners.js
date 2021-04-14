import { useDispatch, useSelector } from "react-redux";
import { Partner } from "../components/partnerCard";
// import { setHeadTitle } from "../store/action";

export const OurPartners = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => {
		return state.partners;
	});

	const orgs = data.partners_info.filter(
		(item) => item.partner_type === "coOrganizer"
	);
	const partners = data.partners_info.filter(
		(item) => item.partner_type === "partner"
	);

	return (
		<section className="partners-group group">
			<div className="container">
				<div className="wrapper">
					{orgs ? (
						<>
							<div className="group__title">CO-ORGANISERS</div>
							<Partner data={orgs} />
						</>
					) : null}
				</div>
				<div className="wrapper">
					{partners ? (
						<>
							<div className="group__title">PARTNERS</div>
							<Partner data={partners} />
						</>
					) : null}
				</div>
			</div>
		</section>
	);
};
