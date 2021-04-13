const initialState = {
	data: null,
	events: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "DATA_LOADED":
			return {
				...state,
				data: action.payload,
			};
		case "EVENTS_LOADED":
			return {
				...state,
				events: action.payload,
			};
		default:
			return state;
	}
};
