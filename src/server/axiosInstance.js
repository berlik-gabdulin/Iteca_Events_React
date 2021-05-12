import axios from "axios";

const host = window.location.hostname;

const url = () => {
	switch (host) {
		case "ica-eurasia.com":
			return `dev.${host}`;
		case "ica.events":
			return `wp.${host}`;
		case "exhibitions-conferences.com":
			return `wp.${host}`;
		default:
			return `olololo.${host}`;
	}
};

export const axiosInstance = axios.create({
	baseURL: `https://${url()}/wp-json/acf/v3/pages`,
});
