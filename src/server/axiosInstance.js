import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://dev.ica-eurasia.com/wp-json/acf/v3/pages",
	// baseURL: "https://wp.ica.events/wp-json/acf/v3/pages",
	// baseURL: "https://wp.exhibitions-conferences.com//wp-json/acf/v3/pages",
	// timeout: 1000,
});
