import React from "react";
import { Widget } from "./Widget";
import { useNavigate } from "react-router-dom";
export const OurBestSellers = () => {
  const navigate = useNavigate();

  return (
    <div className="ourbs">
      <span>Must Try</span>
      <span className="bsheader">Categories</span>

      <div className="bsgrid">
        <div
          onClick={() => {
            navigate("/wedding");
          }}
        >
          <Widget
            img={
              "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2110558/2018/4/13/11523617167748-Vishudh-Women-Black--Gold-Toned-Printed-Straight-Kurta-9041523617167566-1.jpg"
            }
            title={"Wedding collection"}
          />
        </div>
        <div
          onClick={() => {
            navigate("/Ethnic");
          }}
        >
          <Widget
            img={"https://wforwoman.gumlet.io/product/20FEW13233-213275/665/20FEW13233-213275_1.JPG"}
            title={"Ethnic"}
          />
        </div>

        <div
          onClick={() => {
            navigate("/indo");
          }}
        >
          <Widget
            img={
              "https://assets.ajio.com/medias/sys_master/root/20210405/P5YR/606bd89ff997dd7b64a0b2d5/-473Wx593H-461713827-yellow-MODEL.jpg"
            }
            title={"Indo western"}
          />
        </div>

        <div
          onClick={() => {
            navigate("/Partywear");
          }}
        >
          <Widget
            img={"https://cdn.shopify.com/s/files/1/0242/9733/products/30661-1-1659009760.jpg?v=1659010824"}
            title={"Party"}
          />
        </div>

        {/* <Widget
					img={
						"https://cdn.shopify.com/s/files/1/0242/9733/products/30201-1-1658830163.jpg?v=1659070901"
					}
					title={"Family Twining"}
				/> */}
      </div>
    </div>
  );
};
