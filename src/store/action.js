export const SET_DATA = "SET_DATA";
export const SET_EVENTS_ARR = "SET_EVENTS_ARR";
export const SET_SORTED_EVENTS = "SET_SORTED_EVENTS";
export const SET_HOME_DATA = "SET_HOME_DATA";
export const SET_ABOUT_DATA = "SET_ABOUT_DATA";
export const SET_EVENTS_DATA = "SET_EVENTS_DATA";
export const SET_PARTNERS_DATA = "SET_PARTNERS_DATA";
export const SET_CONTACTS = "SET_CONTACTS";
export const SET_NETWORK_DATA = "SET_NETWORK_DATA";
export const SET_FETCH_STATUS = "SET_FETCH_STATUS";

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

const setAboutData = (data) => {
	return {
		type: SET_ABOUT_DATA,
		payload: data,
	};
};

const setEventsData = (data) => {
	return {
		type: SET_EVENTS_DATA,
		payload: data,
	};
};

const setEventsArr = (array) => {
	return {
		type: SET_EVENTS_ARR,
		payload: array,
	};
};

const setSortedEvents = (array) => {
	return {
		type: SET_EVENTS_ARR,
		payload: array,
	};
};

const setPartnersData = (data) => {
	return {
		type: SET_PARTNERS_DATA,
		payload: data,
	};
};

const setContacts = (bool) => {
	return {
		type: SET_CONTACTS,
		payload: bool,
	};
};

const setNetworkData = (data) => {
	return {
		type: SET_NETWORK_DATA,
		payload: data,
	};
};

const setFetchStatus = (bool) => {
	return {
		type: SET_FETCH_STATUS,
		payload: bool,
	};
};

export {
	setData,
	setHomeData,
	setAboutData,
	setEventsData,
	setEventsArr,
	setSortedEvents,
	setPartnersData,
	setContacts,
	setFetchStatus,
	setNetworkData,
};
