import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import "./Wedding.css";
import AOS from "aos";
export const Wedding = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000
		});
	}, []);
	return (
		<div>
			{/* <Navbar></Navbar> */}
			<div className="weddinglanding">
				<div className="weddinginner">
					<div className="maskerforwedding">
						<span data-aos="fade-up">Wedding Collections</span>
						<p data-aos="fade-left">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
							mollitia optio natus voluptate nesciunt id soluta esse repudiandae
							quod exercitationem nulla, officia odit autem, repellendus fuga
							sit dolores, velit ut? Lorem ipsum dolor, sit amet consectetur
							adipisicing elit. Quam labore molestiae culpa suscipit aut beatae
							voluptatem repudiandae eaque, ea similique adipisci maxime natus
							laborum deserunt recusandae fuga necessitatibus tenetur dicta?
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
							laborum exercitationem at modi quas corporis quidem mollitia non
							repudiandae voluptates reprehenderit eum consequuntur, earum
							temporibus. Vitae exercitationem earum vero ipsum?
						</p>
						<button data-aos="fade-left" className="buywedding">
							Order Now
						</button>
					</div>
				</div>
			</div>
			<div className="featureswed">
				{/* <span className="featurewedhead">Our Products</span> */}
				<div className="featurediv">
					<div>img</div>
					<div>content</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};
