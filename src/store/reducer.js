import {
	SET_DATA,
	SET_EVENTS_ARR,
	SET_SORTED_EVENTS,
	SET_HOME_DATA,
	SET_ABOUT_DATA,
	SET_EVENTS_DATA,
	SET_PARTNERS_DATA,
	SET_CONTACTS,
	SET_NETWORK_DATA,
	SET_INDUSTRY_LIST,
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
	events: {
		page_title: "",
		industry: [],
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
				country: "",
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
	network: {
		page_title: "",
	},
	eventsArr: [],
	sortedEvents: [],
	countries: [],
	industry: [],
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
		case SET_EVENTS_DATA:
			return {
				...state,
				events: action.payload,
			};
		case SET_EVENTS_ARR:
			return {
				...state,
				eventsArr: [...state.eventsArr, ...action.payload],
			};
		case SET_SORTED_EVENTS:
			return {
				...state,
				sortedEvents: [...state.eventsArr, ...action.payload],
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
		case SET_NETWORK_DATA:
			return {
				...state,
				network: action.payload,
			};
		case SET_NETWORK_DATA:
			return {
				...state,
				industry: action.payload,
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
