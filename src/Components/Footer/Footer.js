import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="footerinnercontainer">
        <h3>Tina Rosaria</h3>
        <div>
          t is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English. packages and web page
        </div>
        <h4>Catch us on</h4>
        <div className="footer-links">
          <img src="https://img.icons8.com/cotton/2x/facebook.png" />
          <img src="https://img.icons8.com/cotton/2x/instagram-new.png" />
          <img src="https://img.icons8.com/cotton/2x/twitter.png" />
        </div>
      </div>
    </div>
  );
};
