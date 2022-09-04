import React from "react";
import "./Navbar.css";
export const Navbar = () => {
	return (
		<div className="navcontainer">
			<div className="navinnercontainer">
				<div className="navlogocontainer">
					<span>TEENZ</span>
				</div>
				<div className="navoptions">
					<span className="navlink1">Gallery</span>
					<span
						className="navlink2"
						onClick={() => {
							// document.getElementById("contactusdiv").scrollIntoView();
							document.getElementById("testimonialsdiv").scrollIntoView({
								behavior: "smooth"
							});
						}}
					>
						Testimonials
					</span>
					<span className="navlink3">About Us</span>
					<span
						onClick={() => {
							// document.getElementById("contactusdiv").scrollIntoView();
							document.getElementById("contactusdiv").scrollIntoView({
								behavior: "smooth"
							});
						}}
						className="navlink4"
					>
						Contact Us
					</span>
				</div>
				<div className="navicons">
					<i class="fa-solid fa-magnifying-glass"></i>
					<i class="fa-solid fa-cart-shopping"></i>
					<i class="fa-solid fa-user"></i>
				</div>
			</div>
		</div>
	);
};
