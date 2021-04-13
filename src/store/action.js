export const SET_DATA = "SET_DATA";
export const SET_EVENTS = "SET_EVENTS";
export const SET_HOME_DATA = "SET_HOME_DATA";
export const SET_PARTNERS_DATA = "SET_PARTNERS_DATA";
export const SET_IS_HOME = "SET_IS_HOME";

const setData = (data) => {
	return {
		type: SET_DATA,
		payload: data,
	};
};

const setHomeData = (data) => {
	return {
		type: SET_HOME_DATA,
		payload: data,
	};
};

const setEvent = (events) => {
	return {
		type: SET_EVENTS,
		payload: events,
	};
};

const setPartnersData = (data) => {
	return {
		type: SET_PARTNERS_DATA,
		payload: data,
	};
};

const setIsHome = (bool) => {
	return {
		type: SET_IS_HOME,
		payload: bool,
	};
};

export { setData, setHomeData, setEvent, setPartnersData, setIsHome };
