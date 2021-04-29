import { useDispatch } from "react-redux";
import {
	setAboutData,
	setContacts,
	setHomeData,
	setPartnersData,
	setNetworkData,
	setEventsData,
} from "../store/action";
import { axiosInstance } from "./axiosInstance";

export const DataService = () => {
	const dispatch = useDispatch();
	const _baseUrl = axiosInstance.defaults.baseURL;

	const getData = () =>
		axiosInstance.get(_baseUrl).then((res) => {
			const homeData = res.data.find((item) => item.id === 2).acf;

			const aboutData = res.data.find((item) => item.id === 12).acf;
			const aboutDispatchData = {
				page_title: aboutData.page_title,
				text_about: aboutData.text_about.split("<br />"),
				page_img: aboutData.page_img,
			};

			const eventsData = res.data.find((item) => item.id === 15).acf;

			const partnersData = res.data.find((item) => item.id === 19).acf;
			const partnersDispatchData = {
				page_title: partnersData.page_title,
				page_img: partnersData.page_img,
				partners_info: partnersData.partners_info.map((item) => {
					return {
						partners_name: item.partners_name,
						logo_url: item.logo.url,
						description: item.description,
						website_link: item.website_link,
						photo_url: item.photo.url,
						partner_type: item.partner_type.value,
						country: item.country,
					};
				}),
			};

			let contactsData = res.data.find((item) => item.id === 21).acf;
			contactsData = {
				...contactsData,
				hours: contactsData.hours.split("<br />"),
			};

			const networkData = res.data.find((item) => item.id === 17).acf;

			dispatch(setHomeData(homeData));
			dispatch(setAboutData(aboutDispatchData));
			dispatch(setEventsData(eventsData));
			dispatch(setPartnersData(partnersDispatchData));
			dispatch(setContacts(contactsData));
			dispatch(setNetworkData(networkData));
		});

	getData();
};
