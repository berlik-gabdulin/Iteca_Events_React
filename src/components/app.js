import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { Home } from "../pages/home";
import { AboutUs } from "../pages/aboutUs";
import { Contacts } from "../pages/contacts";
import { Events } from "../pages/events";
import { OurGlobalNetwork } from "../pages/ourGlobalNetwork";
import { OurPartners } from "../pages/ourPartners";

export const App = () => {
	const [appHomeData, setAppData] = useState();

	const getHomeData = async () => {
		await fetch("http://dev.ica-eurasia.com/wp-json/wp/v2/pages/2")
			.then((res) => {
				const fetchResponse = res.json();
				console.log("fetchResponse", fetchResponse);
				return fetchResponse;
			})
			.then((res) => {
				return res;
			});
	};

	useEffect(() => {
		setAppData(getHomeData());
	}, []);

	return (
		<>
			<Router>
				<Header />
				<Switch>
					{appHomeData !== undefined ? (
						<Route exact path="/" component={Home} data={appHomeData} />
					) : null}
					<Route path="/about-us" component={AboutUs} />
					<Route path="/events" component={Events} />
					<Route path="/our-global-network" component={OurGlobalNetwork} />
					<Route path="/our-partners" component={OurPartners} />
					<Route path="/contacts" component={Contacts} />
				</Switch>
			</Router>
			<Footer />
		</>
	);
};
