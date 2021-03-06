import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { Home } from "../pages/home";
import { AboutUs } from "../pages/aboutUs";
import { Contacts } from "../pages/contacts";
import { Events } from "../pages/events";
import { OurGlobalNetwork } from "../pages/ourGlobalNetwork";
import { OurPartners } from "../pages/ourPartners";
import { EventByIndustry } from "../pages/eventByIndustry";
import { DataService } from "../server/dataService";

export const App = () => {
	DataService();

	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about-us" component={AboutUs} />
					<Route exact path="/events" component={Events} />
					<Route path="/events/:industry/:title" component={EventByIndustry} />
					<Route path="/our-global-network" component={OurGlobalNetwork} />
					<Route path="/our-partners" component={OurPartners} />
					<Route path="/contacts" component={Contacts} />
				</Switch>
			</Router>
			<Footer />
		</>
	);
};
