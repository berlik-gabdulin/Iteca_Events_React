export const SET_DATA = "SET_DATA";
export const SET_EVENTS = "SET_EVENTS";
export const SET_HOME_DATA = "SET_HOME_DATA";
export const SET_ABOUT_DATA = "SET_ABOUT_DATA";
export const SET_PARTNERS_DATA = "SET_PARTNERS_DATA";
export const SET_CONTACTS = "SET_CONTACTS";

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

const setContacts = (bool) => {
	return {
		type: SET_CONTACTS,
		payload: bool,
	};
};

export {
	setData,
	setHomeData,
	setAboutData,
	setEvent,
	setPartnersData,
	setContacts,
};
