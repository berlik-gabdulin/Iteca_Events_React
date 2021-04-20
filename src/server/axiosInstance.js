import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://dev.ica-eurasia.com/wp-json/acf/v3/pages",
	// timeout: 1000,
});
