import React from "react";
import { OurBestSellers } from "./OurBestSellers";
import "./landing.css";
import { Caro } from "./Caro";
import { Testimonials } from "./Testimonials";
import { Contactus } from "./Contactus";
export const Landing = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<Caro />
			<OurBestSellers />
			<Testimonials></Testimonials>
			<Contactus></Contactus>
		</div>
	);
};
