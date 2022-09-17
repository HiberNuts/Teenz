import React, { useState } from "react";
import "./Fabrics.scss";
import Coverflow from "react-coverflow";

export const Fabrics = () => {
  const [clickValue, setclickValue] = useState(0);
  const fn = function () {
    /* do your action */
  };
  return (
    <div className="fabric">
      <h4>Know your Fabric </h4>
      <div className="carousel">
        <Coverflow
          className="coverflow"
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={true}
          clickable={true}
          classes={{ backgroundColor: "rgb(255,255,255)" }}
          media={{
            "@media (max-width: 900px)": {
              width: "600px",
              height: "300px",
            },
            "@media (min-width: 900px)": {
              width: "960px",
              height: "600px",
            },
          }}
        >
          <div onClick={() => setclickValue(1)}>
            <img
              id="#image"
              src="https://img.freepik.com/premium-photo/popular-banana-yellow-fabric-waves-background-texture-pattern-yellow-fabric_328515-45.jpg?size=626&ext=jpg"
              alt="title or description"
              style={{ width: "100%", height: "350px" }}
            />
          </div>
          <div onClick={() => setclickValue(2)}>
            <img
              id="#image"
              src="https://cdn.pixabay.com/photo/2016/07/12/11/45/towels-1511875__340.jpg"
              alt="jute"
              data-action="#here"
              style={{ width: "100%", height: "350px" }}
              // data-action="http://andyyou.github.io/react-coverflow/"
            />
          </div>
          <div onClick={() => setclickValue(3)}>
            <img
              id="#image"
              src="https://cdn.pixabay.com/photo/2016/10/17/13/46/fabric-1747649__340.jpg"
              alt="linen"
              style={{ width: "100%", height: "350px" }}
              // data-action="http://andyyou.github.io/react-coverflow/"
            />
          </div>

          <div onClick={() => setclickValue(4)}>
            <img
              id="#image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpr8vTgAFLzVdk2uy_oVTnW6coc3QNPfH7g&usqp=CAU"
              alt="title or description"
              style={{ width: "100%", height: "350px" }}
              // data-action="http://andyyou.github.io/react-coverflow/"
            />
          </div>

          <div onClick={() => setclickValue(5)}>
            <img
              id="#image"
              src="https://img.freepik.com/free-photo/sack-cocoa-beans-with-stack-chocolate-bars-wooden-table_23-2147873753.jpg?size=626&ext=jpg"
              alt="title or description"
              style={{ width: "100%", height: "350px" }}
              // data-action="http://andyyou.github.io/react-coverflow/"
            />
          </div>
          <div onClick={() => setclickValue(6)}>
            <img
              id="#image"
              src="https://img.freepik.com/premium-photo/sex-orgasm-concept-with-banana-crumpled-silk-sheet_695716-196.jpg?size=626&ext=jpg"
              alt="title or description"
              style={{ width: "100%", height: "350px" }}
              // data-action="http://andyyou.github.io/react-coverflow/"
            />
          </div>
        </Coverflow>
      </div>
      {clickValue == 1 && <div>Thi is first slide</div>}
      {clickValue == 2 && <div>Thi is second slide</div>}
      {clickValue == 3 && <div>Thi is third slide</div>}
      {clickValue == 4 && <div>Thi is fourth slide</div>}
    </div>
  );
};
