import React from "react";
import "./Widget.css";
import img from "./l1-min.jpg";
export const Widget = (props) => {
	return (
		<div className="lwidget">
			<img src={props.img} />
			<div class="middle">
				<div class="text">{props.title}</div>
			</div>
		</div>
	);
};
