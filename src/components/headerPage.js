import { useSelector } from "react-redux";
import { useLocation } from "react-router";

export const HeaderPage = () => {
	const {
		aboutTitle,
		contactsTitle,
		partnersTitle,
		eventsTitle,
		networkTitle,
	} = useSelector(
		({
			about: { page_title: aboutTitle },
			events: { page_title: eventsTitle },
			network: { page_title: networkTitle },
			partners: { page_title: partnersTitle },
			contacts: { page_title: contactsTitle },
		}) => ({
			aboutTitle,
			contactsTitle,
			eventsTitle,
			networkTitle,
			partnersTitle,
		})
	);

	const { pathname } = useLocation();

	const getTitle = () => {
		switch (pathname) {
			case "/contacts":
				return contactsTitle;
			case "/about-us":
				return aboutTitle;
			case "/events":
				return eventsTitle;
			case "/our-global-network":
				return networkTitle;
			case "/our-partners":
				return partnersTitle;
			default:
				return "";
		}
	};

	return (
		<section className="events">
			<div className="container">
				{getTitle() ? <h3 className="section__title">{getTitle()}</h3> : null}
			</div>
		</section>
	);
};
