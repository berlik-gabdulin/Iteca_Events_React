import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { Home } from "../pages/home";
import { AboutUs } from "../pages/aboutUs";
import { Contacts } from "../pages/contacts";
import { Events } from "../pages/events";
import { OurGlobalNetwork } from "../pages/ourGlobalNetwork";
import { OurPartners } from "../pages/ourPartners";
import { useDispatch, useSelector } from "react-redux";
import { dataLoaded } from "../store/action";
import { axiosInstance } from "../server/axiosInstance";

export const App = () => {
	const dispatch = useDispatch();
	const getHomeData = () =>
		axiosInstance.get(axiosInstance.defaults.baseURL).then((res) => res.data);
	setTimeout(() => {
		console.log(getHomeData());
	}, 2000);

	// useEffect(() => {
	// 	dispatch(dataLoaded(getHomeData()));
	// }, [dispatch]);

	// const appHomeData = useSelector((state) => {
	// 	// console.log("state.data", state.data);
	// });

	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
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
