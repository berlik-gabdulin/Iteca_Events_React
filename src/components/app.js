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
import {
	setData,
	setHomeData,
	setEvent,
	setPartnersData,
	setIsHome,
} from "../store/action";
import { axiosInstance } from "../server/axiosInstance";
import { HeaderPage } from "./headerPage";
import { HeaderHome } from "./headerHome";

export const App = () => {
	const dispatch = useDispatch();
	const _baseUrl = axiosInstance.defaults.baseURL;

	const isHome = useSelector((state) => {
		return state.isHome;
	});

	const getData = () =>
		axiosInstance.get(_baseUrl).then((res) => {
			dispatch(setData(res.data));
			dispatch(setHomeData(res.data.find((item) => item.id === 2).acf));

			const partnersData = res.data.find((item) => item.id === 19).acf;
			const partnersDispatchData = {
				page_title: partnersData.page_title,
				partners_info: partnersData.partners_info.map((item) => {
					return {
						partners_name: item.page_title,
						logo_url: item.logo.url,
						description: item.description,
						website_link: item.wwebsite_link,
						photo_url: item.photo.url,
						partner_type: item.partner_type.value,
					};
				}),
			};
			dispatch(setPartnersData(partnersDispatchData));
		});

	useEffect(() => getData());

	return (
		<>
			<Router>
				<Header />
				{isHome === true ? <HeaderHome /> : <HeaderPage />}
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
