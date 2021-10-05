const host = window.location.hostname;

export const SiteSwitch = () => {
	switch (host) {
		case "ica-eurasia.com":
			return {
				footerDesc: "ICA Eurasia. Commercial License No: 95244.",
				formUrl: `dev.${host}`,
				title: "ICA Eurasia",
				mainColor: "#0f7e86",
				secondColor: "#7bbfc4",
				backgroundColor: "rgba(15, 126, 134, 0.6)",
			};
		case "ica.events":
			return {
				footerDesc: "ICA (JV) LTD – ICA Group. Company number 11499614.",
				formUrl: `wp.${host}`,
				title: "ICA Events",
				mainColor: "#0f7e86",
				secondColor: "#7bbfc4",
				backgroundColor: "rgba(15, 126, 134, 0.6)",
			};
		case "exhibitions-conferences.com":
			return {
				footerDesc:
					"I.T.E. EXHIBITIONS & CONFERENCES LIMITED – ITE E&C. Company number 02933850.",
				formUrl: `wp.${host}`,
				title: "EXHIBITIONS & CONFERENCES",
				mainColor: "#de5624",
				secondColor: "#ff7542",
				backgroundColor: "rgba(63, 35, 25, 0.6)",
			};
		default:
			return {
				footerDesc: "ololo",
				formUrl: `olololo.${host}`,
				formUrl: `wp.exhibitions-conferences.com`,
				title: "Developmet Title",
				mainColor: "#de5624",
				secondColor: "#ff7542",
				backgroundColor: "rgba(63, 35, 25, 0.6)",
			};
	}
};
