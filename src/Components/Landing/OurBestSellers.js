import React from "react";
import { Widget } from "./Widget";

export const OurBestSellers = () => {
	return (
		<div className="ourbs">
			<span>Must Try</span>
			<span className="bsheader">Categories</span>

			<div className="bsgrid">
				<Widget
					img={
						"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2110558/2018/4/13/11523617167748-Vishudh-Women-Black--Gold-Toned-Printed-Straight-Kurta-9041523617167566-1.jpg"
					}
					title={"Kurta Women"}
				/>
				<Widget
					img={
						"https://wforwoman.gumlet.io/product/20FEW13233-213275/665/20FEW13233-213275_1.JPG"
					}
					title={"Blouse"}
				/>
				<Widget
					img={
						"https://assets.ajio.com/medias/sys_master/root/20210405/P5YR/606bd89ff997dd7b64a0b2d5/-473Wx593H-461713827-yellow-MODEL.jpg"
					}
					title={"Men's Kurta"}
				/>
				<Widget
					img={
						"https://cdn.shopify.com/s/files/1/0242/9733/products/30661-1-1659009760.jpg?v=1659010824"
					}
					title={"Girls Ethinic"}
				/>
				<Widget
					img={
						"https://cdn.shopify.com/s/files/1/0242/9733/products/30201-1-1658830163.jpg?v=1659070901"
					}
					title={"Boys Ethinic Wear"}
				/>
				<Widget
					img={
						"https://cdn.shopify.com/s/files/1/0272/8270/2424/products/DNM00002240_2.jpg?v=1602527690"
					}
					title={"Women Bottoms"}
				/>
			</div>
		</div>
	);
};
