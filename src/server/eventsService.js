import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setEventsArr, setFetchStatus } from "../store/action";
import { axiosInstance } from "./axiosInstance";
import nextId from "react-id-generator";

export const EventsService = () => {
	// const dispatch = useDispatch();
	const dataFetched = useSelector(({ dataFetched }) => dataFetched);
	const _baseUrl = axiosInstance.defaults.baseURL;

	const exhListPost = async (url, apiKey) => {
		const fetchData = await fetch(url, {
			method: "POST",
			body: JSON.stringify({
				apiKey: apiKey,
				lang: "en",
				projectID: 0,
			}),
		})
			.then((res) => res.json())
			.then((json) => json.confList)
			.catch((e) => {
				console.log(e);
			});
		return fetchData;
	};

	const getNewObj = (event, country) => {
		const key = nextId();
		const dateReset = (date) => {
			if (country === "Uzbekistan") {
				let newDate = date.split(" ")[0].split(".");
				return `${newDate[2]}-${newDate[1]}-${newDate[0]}`;
			} else {
				return date;
			}
		};

		event.beginDate = dateReset(event.beginDate);
		event.endDate = dateReset(event.endDate);

		let beginDate = new Date(event.beginDate.split(" ")[0]),
			endDate = new Date(event.endDate);

		let pastEvent = new Date() > endDate;

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
				event.textDate = `${beginDate.toLocaleString("en", {
					day: "numeric",
				})} - ${endDate.toLocaleString("en", {
					day: "numeric",
				})} ${endDate.toLocaleString("en", {
					month: "long",
				})} ${endDate.toLocaleString("en", {
					year: "numeric",
				})}`;
			} else {
				event.textDate = `${beginDate.toLocaleString("en", {
					day: "numeric",
				})} ${endDate.toLocaleString("en", {
					month: "long",
				})} ${endDate.toLocaleString("en", {
					year: "numeric",
				})}`;
			}
		} else {
			event.textDate = `${beginDate.toLocaleString("en", {
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
			id: key,
			projectID: event.projectID,
			textDate: event.textDate,
			beginDate: event.beginDate,
			endDate: event.endDate,
			location: event.location,
			country,
			industry: event.industry,
			website: event.programme,
			pastEvent,
		};
		if (country !== "Azerbaijan") {
			eventObj = {
				...eventObj,
				image_profile: event.logomini,
				project: event.title,
				description: event.description,
			};
		} else {
			eventObj = {
				...eventObj,
				image_profile: event.image_profile,
				project: event.short_title,
				description: event.title,
			};
		}
		return eventObj;
	};

	const getEventsArrThunk = () => async (dispatch) => {
		try {
			if (!dataFetched) {
				const someRes = await axiosInstance.get(_baseUrl);
				const apiList = someRes.data.find((item) => item.id === 2).acf.api_list;

				await apiList.map(async ({ api_url, apiKey, country }) => {
					const exhListRes = await exhListPost(api_url, apiKey);
					const exhListArray = exhListRes
						? exhListRes.map((event) => {
								const obj = getNewObj(event, country);
								return obj;
						  })
						: [];
					dispatch(setEventsArr(exhListArray));
				});
				dispatch(setFetchStatus(true));
			}
		} catch (error) {
			throw error;
		}
	};

	return { getEventsArrThunk };
};
