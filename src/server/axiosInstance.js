import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "http://dev.ica-eurasia.com/wp-json/",
	// timeout: 1000,
});
