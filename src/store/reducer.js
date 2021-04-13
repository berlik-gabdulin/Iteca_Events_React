import {
	SET_DATA,
	SET_EVENTS,
	SET_HOME_DATA,
	SET_PARTNERS_DATA,
} from "./action";

const initialState = {
	data: [],
	homeData: {
		title: "",
		subtitle: "",
		api_list: [
			{
				title_api: "",
				api_url: "",
				apiKey: "",
			},
		],
		isHome: true,
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
	events: [
		{
			image_profile: "",
			project: "",
			description: "",
			textDate: "",
			location: "",
		},
	],
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
		default:
			return state;
	}
};
