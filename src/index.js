import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { AboutUs } from "./pages/aboutUs";
import { Contacts } from "./pages/contacts";
import { Events } from "./pages/events";
import { OurGlobalNetwork } from "./pages/ourGlobalNetwork";
import { OurPartners } from "./pages/ourPartners";

ReactDOM.render(
	<React.StrictMode>
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
	</React.StrictMode>,
	document.getElementById("root")
);
