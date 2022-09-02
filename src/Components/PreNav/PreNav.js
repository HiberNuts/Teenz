import React from "react";
import Typewriter from "typewriter-effect";
export const PreNav = () => {
	return (
		<div className="prenavcontainer">
			<span>
				<Typewriter
					options={{
						strings: [
							"10% OFF FIRST ORDER CODE: WELCOME10",
							"FREE SHIPPING | 60-DAYS EASY RETURN",
						],
						autoStart: true,
						loop: true,
					}}
				/>
			</span>
		</div>
	);
};
