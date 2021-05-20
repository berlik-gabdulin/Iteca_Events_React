import axios from "axios";
import { SiteSwitch } from "../components/siteSwitch";

export const axiosInstance = axios.create({
	baseURL: `https://${SiteSwitch().formUrl}/wp-json/acf/v3/pages`,
});
