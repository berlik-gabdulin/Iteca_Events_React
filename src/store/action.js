const dataLoaded = (data) => {
	return {
		type: "DATA_LOADED",
		payload: data,
	};
};
const evenetsLoaded = (events) => {
	return {
		type: "EVENTS_LOADED",
		payload: events,
	};
};

export { dataLoaded, evenetsLoaded };
