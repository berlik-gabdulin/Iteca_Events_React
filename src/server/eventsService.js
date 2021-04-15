import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEvents, setFetchStatus } from "../store/action";
import { axiosInstance } from "./axiosInstance";

export const EventsService = () => {
	// const [events, setEvents] = useState([]);
	const dispatch = useDispatch();
	const _baseUrl = axiosInstance.defaults.baseURL;

	const getEvents = () =>
		axiosInstance.get(_baseUrl).then(async (res) => {
			const apiList = res.data.find((item) => item.id === 2).acf.api_list;

			console.log(apiList);

			const eventsArray = [];

			await apiList.map((apiItem) => {
				const title = apiItem.title_api,
					url = apiItem.api_url,
					apiKey = apiItem.apiKey,
					country = apiItem.country;

				fetch(url, {
					method: "POST",
					body: JSON.stringify({
						apiKey: apiKey,
						lang: "en",
						projectID: 0,
					}),
				})
					.then((res) => {
						const apiData = res.json();
						console.log("apiData", title, apiData);
						return apiData;
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
							// console.log(item.beginDate);

							let beginDate = new Date(item.beginDate.split(" ")[0]),
								endDate = new Date(item.endDate);

							// console.log(country, item.beginDate, " => ", beginDate);

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

							// console.log(eventsArray);
						});
					});
			});

			console.log(eventsArray);

			await dispatch(setEvents(eventsArray));
		});
	useDispatch(setFetchStatus(true));
	getEvents();
	console.log("Events Service Fired");
};
