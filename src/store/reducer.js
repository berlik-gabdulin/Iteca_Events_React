import {
	SET_DATA,
	SET_EVENTS,
	SET_HOME_DATA,
	SET_ABOUT_DATA,
	SET_PARTNERS_DATA,
	SET_CONTACTS,
	SET_FETCH_STATUS,
} from "./action";

const initialState = {
	data: [],
	homeData: {
		title: "",
		subtitle: "",
		isFetched: false,
	},
	about: {
		page_title: "",
		text_about: [""],
	},
	partners: {
		page_title: "",
		partners_info: [
			{
				partners_name: "",
				logo_url: "",
				description: [""],
				website_link: "",
				photo_url: "",
				partner_type: { value: "coOrganizer" },
			},
		],
	},
	contacts: {
		page_title: "",
		phone: "",
		address: "",
		hours: [""],
		map_link: "",
		page_img: false,
	},
	events: [
		{
			image_profile: "",
			project: "",
			description: "",
			textDate: "",
			beginDate: "",
			location: "",
			industry: "",
		},
	],
	dataFetched: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DATA:
			return {
				...state,
				data: action.payload,
			};
		case SET_HOME_DATA:
			return {
				...state,
				homeData: action.payload,
			};
		case SET_ABOUT_DATA:
			return {
				...state,
				about: action.payload,
			};
		case SET_EVENTS:
			return {
				...state,
				events: action.payload,
			};
		case SET_PARTNERS_DATA:
			return {
				...state,
				partners: action.payload,
			};
		case SET_CONTACTS:
			return {
				...state,
				contacts: action.payload,
			};
		case SET_FETCH_STATUS:
			return {
				...state,
				dataFetched: action.payload,
			};
		default:
			return state;
	}
};
