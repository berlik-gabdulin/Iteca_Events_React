import { useDispatch, useSelector } from "react-redux";
import { setEvents, setFetchStatus } from "../store/action";
import { axiosInstance } from "./axiosInstance";

export const EventsService = () => {
	const dispatch = useDispatch();
	const _baseUrl = axiosInstance.defaults.baseURL;

	const eventsArray = useSelector(({ events }) => events);

	const getEvents = async () => {
		const apiList = await axiosInstance.get(_baseUrl).then((res) => {
			return res.data.find((item) => item.id === 2).acf.api_list;
		});

		const apiData = await apiList.map(({ api_url, apiKey, country }) => {
			return fetch(api_url, {
				method: "POST",
				body: JSON.stringify({
					apiKey: apiKey,
					lang: "en",
					projectID: 0,
				}),
			})
				.then((res) => {
					return res.json();
				})
				.then((events) => {
					events.confList.forEach((item) => {
						const dateReset = (date) => {
							if (country === "Uzbekistan") {
								let newDate = date.split(" ")[0].split(".");
								return `${newDate[2]}-${newDate[1]}-${newDate[0]}`;
							} else {
								return item.beginDate;
							}
						};

						item.beginDate = dateReset(item.beginDate);
						item.endDate = dateReset(item.endDate);

						let beginDate = new Date(item.beginDate.split(" ")[0]),
							endDate = new Date(item.endDate);

						if (
							beginDate.toLocaleString("en", { month: "long" }) ===
							endDate.toLocaleString("en", { month: "long" })
						) {
							if (
								beginDate.toLocaleString("en", {
									day: "numeric",
								}) !==
								endDate.toLocaleString("en", {
									day: "numeric",
								})
							) {
								item.textDate = `${beginDate.toLocaleString("en", {
									day: "numeric",
								})} - ${endDate.toLocaleString("en", {
									day: "numeric",
								})} ${endDate.toLocaleString("en", {
									month: "long",
								})} ${endDate.toLocaleString("en", {
									year: "numeric",
								})}`;
							} else {
								item.textDate = `${beginDate.toLocaleString("en", {
									day: "numeric",
								})} ${endDate.toLocaleString("en", {
									month: "long",
								})} ${endDate.toLocaleString("en", {
									year: "numeric",
								})}`;
							}
						} else {
							item.textDate = `${beginDate.toLocaleString("en", {
								day: "numeric",
							})} ${beginDate.toLocaleString("en", {
								month: "long",
							})} - ${endDate.toLocaleString("en", {
								day: "numeric",
							})} ${endDate.toLocaleString("en", {
								month: "long",
							})} ${endDate.toLocaleString("en", { year: "numeric" })}`;
						}

						let eventObj = {
							projectID: item.projectID,
							textDate: item.textDate,
							beginDate: item.beginDate,
							endDate: item.endDate,
							location: item.location,
							industry: "",
						};
						if (country !== "Azerbaijan") {
							eventObj = {
								...eventObj,
								image_profile: item.logomini,
								project: item.title,
								description: item.description,
							};
						} else {
							eventObj = {
								...eventObj,
								image_profile: item.logo,
								project: item.short_title,
								description: item.title,
							};
						}

						eventsArray.push(eventObj);
					});
				});
		});
		await dispatch(setEvents(eventsArray));
		return await apiData;
	};
	dispatch(setFetchStatus(true));

	getEvents();
};
