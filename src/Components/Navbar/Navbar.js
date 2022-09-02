import React from "react";
import "./Navbar.css";
export const Navbar = () => {
	return (
		<div className="navcontainer">
			<div className="navinnercontainer">
				<div className="navlogocontainer">
					<span>TEENZ</span>
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
