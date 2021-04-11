import { useEffect } from "react";
export const OurGlobalNetwork = () => {
	useEffect(() => console.log("OurGlobalNetwork"), []);
	return <h1>OurGlobalNetwork</h1>;
};
