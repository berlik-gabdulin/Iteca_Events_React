import { useDispatch, useSelector } from "react-redux";
// import { EventCard } from "../components/eventCard";

export const Home = () => {
	// const getEvents = async (data) => {
	// 	console.log("data.acf.api_list", data.acf.api_list);
	// 	const api = data.acf.api_list[0];
	// 	await fetch(api.api_url, {
	// 		method: "POST",
	// 		body: JSON.stringify({
	// 			apiKey: api.apiKey,
	// 			lang: "ru",
	// 			// lang: api.lang,
	// 			projectID: 0,
	// 		}),
	// 	})
	// 		.then((res) => {
	// 			const apiData = res.json();
	// 			return apiData;
	// 		})
	// 		.then((events) => {
	// 			events.confList.forEach((item) => {
	// 				let beginDate = new Date(item.beginDate.split(" ")[0]),
	// 					endDate = new Date(item.endDate);

	// 				// console.log(beginDate);

	// 				if (
	// 					beginDate.toLocaleString("en", { month: "long" }) ==
	// 					endDate.toLocaleString("en", { month: "long" })
	// 				) {
	// 					item.textDate = `${beginDate.toLocaleString("en", {
	// 						day: "numeric",
	// 					})} - ${endDate.toLocaleString("en", {
	// 						day: "numeric",
	// 					})} ${endDate.toLocaleString("en", {
	// 						month: "long",
	// 					})} ${endDate.toLocaleString("en", { year: "numeric" })}`;
	// 				} else {
	// 					item.textDate = `${beginDate.toLocaleString("en", {
	// 						day: "numeric",
	// 					})} ${beginDate.toLocaleString("en", {
	// 						month: "long",
	// 					})} - ${endDate.toLocaleString("en", {
	// 						day: "numeric",
	// 					})} ${endDate.toLocaleString("en", {
	// 						month: "long",
	// 					})} ${endDate.toLocaleString("en", { year: "numeric" })}`;
	// 				}
	// 			});

	// 			return events.confList;
	// 		});
	// };

	// useEffect(() => setEvents(getEvents), []);

	return (
		<div>
			<section className="search search">
				<div className="container">
					<div className="search-form">
						<div className="search-form__item">
							<input
								type="text"
								id="searching"
								placeholder="Event title, industry, country, city, month"
							/>
						</div>
						<div className="search-form__item">
							<p className="search-form__text">Search by industry</p>
							<select
								className="search-form__select"
								name="industry"
								id="industry"
							>
								<option value="1">Oil & Gas</option>
								<option value="2">Beauty</option>
								<option value="3">Building & constraction </option>
								<option value="4">Power & Water </option>
								<option value="5">Food & Hospitality</option>
								<option value="6">Defence & Security</option>
							</select>
						</div>
						<div className="search-form__item">
							<p className="search-form__text">Search by location</p>
							<select
								className="search-form__select"
								name="location"
								id="location"
							>
								<option value="1">Azerbaijan</option>
								<option value="2">Kazakhstan</option>
								<option value="3">England</option>
								<option value="4">Uzbekistan</option>
							</select>
						</div>
					</div>
					<div className="cards">
						{/* {events
							? events.map((item) => {
									return <EventCard event={item} key={item.projectID} />;
							  })
							: null} */}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
