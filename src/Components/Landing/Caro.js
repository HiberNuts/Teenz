import React from "react";
import img1 from "./l1-min.jpg";
import img4 from "./l4-min.jpg";
import img5 from "./l5-min.jpg";
export const Caro = () => {
	return (
		<div
			id="carouselExampleIndicators"
			class="carousel slide"
			data-ride="carousel"
		>
			<ol class="carousel-indicators">
				<li
					data-target="#carouselExampleIndicators"
					data-slide-to="0"
					class="active"
				></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-item active" style={{}}>
					<div className="limginfo">
						<span className="limginfo1">Lorem ipsum, dolor. Quo odio t</span>
						<span className="limginfo2">
							Lorem ipsum, dolor. Quo odio t adsfljhas
						</span>

						<button className="limginfo3">Buy Now</button>
					</div>
					<img
						class="d-block w-100"
						src={img5}
						alt="First slide"
						style={{ height: "700px" }}
					/>
				</div>
				<div class="carousel-item">
					<div className="limginfo">
						<span className="limginfo1">Lorem ipsum, dolor. Quo odio t</span>
						<span className="limginfo2">
							Lorem ipsum, dolor. Quo odio t adsfljhas
						</span>

						<button className="limginfo3">Buy Now</button>
					</div>
					<img
						class="d-block w-100"
						src={img4}
						alt="Second slide"
						style={{ height: "700px" }}
					/>
				</div>
				<div class="carousel-item ">
					<div className="limginfoL">
						<span className="limginfo1">Lorem ipsum, dolor. Quo odio t</span>
						<span className="limginfo2">
							Lorem ipsum, dolor. Quo odio t adsfljhas
						</span>

						<button className="limginfo3">Buy Now</button>
					</div>
					<img
						class="d-block w-100"
						src={img1}
						alt="Third slide"
						style={{ height: "700px" }}
					/>
				</div>
			</div>
			<a
				class="carousel-control-prev"
				href="#carouselExampleIndicators"
				role="button"
				data-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a
				class="carousel-control-next"
				href="#carouselExampleIndicators"
				role="button"
				data-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	);
};
