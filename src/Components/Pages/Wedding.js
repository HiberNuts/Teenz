import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import "./Wedding.css";
import img1 from "./pexels-olya-kobruseva-4661261-min.jpg";
import img2 from "./pexels-photomix-company-291738.jpg";
import img3 from "./pexels-devan-manuel-9164674.jpg";
import AOS from "aos";
export const Wedding = () => {
	const navigate = useNavigate();

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true
		});
	}, []);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
				// backgroundColor: "black"
			}}
		>
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
						<button
							data-aos="fade-left"
							className="buywedding"
							onClick={() => {
								navigate("/ordernow/wedding");
							}}
						>
							Order Now
						</button>
					</div>
				</div>
			</div>
			<div className="featureswed">
				{/* <span className="featurewedhead">Our Products</span> */}
				<div className="featurediv">
					<div className="featuredimgdiv" data-aos="fade-left">
						<img src={img1} alt="" />
					</div>
					<div className="featuedcontentdiv">
						<span className="featuredcontectheading">Why lorem ?</span>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sit
							facilis optio modi fugiat. Est voluptatum consectetur unde
							quibusdam nisi, architecto nihil, sit illo quas ea, ipsam
							blanditiis? Numquam, consequatur. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Sunt sed minus ea cumque, nulla
							laborum, soluta illo consectetur nam numquam iusto facere quia
							nobis illum suscipit cupiditate sit excepturi animi.
						</span>
					</div>
				</div>
				<div className="featurediv2" data-aos="fade-right">
					<div className="featuredimgdiv2">
						<img src={img2} alt="" />
					</div>
					<div className="featuedcontentdiv2" data-aos="fade-right">
						<span className="featuredcontectheading">What's new ?</span>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sit
							facilis optio modi fugiat. Est voluptatum consectetur unde
							quibusdam nisi, architecto nihil, sit illo quas ea, ipsam
							blanditiis? Numquam, consequatur. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Sunt sed minus ea cumque, nulla
							laborum, soluta illo consectetur nam numquam iusto facere quia
							nobis illum suscipit cupiditate sit excepturi animi.
						</span>
					</div>
				</div>
				<div className="featurediv" data-aos="fade-left">
					<div className="featuredimgdiv">
						<img src={img3} alt="" />
					</div>
					<div className="featuedcontentdiv">
						<span className="featuredcontectheading">What we have ?</span>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sit
							facilis optio modi fugiat. Est voluptatum consectetur unde
							quibusdam nisi, architecto nihil, sit illo quas ea, ipsam
							blanditiis? Numquam, consequatur. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Sunt sed minus ea cumque, nulla
							laborum, soluta illo consectetur nam numquam iusto facere quia
							nobis illum suscipit cupiditate sit excepturi animi.
						</span>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};