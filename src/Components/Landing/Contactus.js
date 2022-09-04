import React from "react";
import "./Contactus.css";

export const Contactus = () => {
	return (
		<div className="contactusdiv" id="contactusdiv">
			<div class="contact container">
				<form action="https://formspree.io/f/xzbowpjq" method="POST">
					<div class="form">
						<div class="form-txt">
							<h1>Contact Us</h1>
							<span>
								As you might expect of a company that began as a high-end
								interiors contractor, we pay strict attention.
							</span>
							<h3>USA</h3>
							<p>
								195 E Parker Square Dr, Parker, CO 801
								<br />
								+43 982-314-0958
							</p>
							<h3>India</h3>
							<p>
								HW95+C9C, Mhada Colony, Viman Nagar, Pune, Maharashtra
								<br />
								411014
							</p>
						</div>
						<div class="form-details">
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Name"
								required
							/>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Email"
								required
							/>
							<textarea
								name="message"
								id="message"
								cols="52"
								rows="7"
								placeholder="Message"
								required
							></textarea>
							<button>SEND MESSAGE</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
