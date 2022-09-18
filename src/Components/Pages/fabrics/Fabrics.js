import React, { useState, useEffect } from "react";
import "./Fabrics.css";
import Coverflow from "react-coverflow";
import AOS from "aos";
import { Footer } from "../../Footer/Footer";

export const Fabrics = () => {
  const [clickValue, setclickValue] = useState(0);
  const fn = function () {
    /* do your action */
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const Description = () => {
    return (
      <div className="description">
        <p>more images here</p>
        <div className="grid-image" data-aos="zoom-in">
          <img src="https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
          <img src="https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80" />
          <img src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" />
          <img src="https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80" />
        </div>
        <div className="desc-content">
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it
            come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
            undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
            comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
            also reproduced in their exact original form, accompanied by English versions from the 1914 translation by
            H. Rackham.
          </p>
        </div>
      </div>
    );
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
          classes={{ background: "white" }}
          media={{
            "@media (max-width: 700px)": {
              width: "600px",
              height: "400px",
            },
            "@media (min-width: 900px)": {
              width: "960px",
              height: "350px",
            },
            // "@media (min-width: 700px)": {
            //   width: "500px",
            //   height: "400px",
            // },
          }}
        >
          <div className="image-div" onClick={() => setclickValue(1)}>
            <img
              className="fabric-image"
              id="#image"
              src="https://img.freepik.com/premium-photo/popular-banana-yellow-fabric-waves-background-texture-pattern-yellow-fabric_328515-45.jpg?size=626&ext=jpg"
              alt="title or description"
              // style={{ width: "100%", height: "350px" }}
            />
          </div>
          <div onClick={() => setclickValue(2)}>
            <img
              className="fabric-image"
              src="https://cdn.pixabay.com/photo/2016/07/12/11/45/towels-1511875__340.jpg"
              alt="jute"
              data-action="#here"
              // style={{ width: "100%", height: "350px" }}
              // data-action="http://andyyou.github.io/react-coverflow/"
            />
          </div>
          <div className="image-div" onClick={() => setclickValue(3)}>
            <img
              className="fabric-image"
              src="https://cdn.pixabay.com/photo/2016/10/17/13/46/fabric-1747649__340.jpg"
              alt="linen"
              // style={{ width: "100%", height: "350px" }}
              // data-action="http://andyyou.github.io/react-coverflow/"
            />
          </div>

          <div className="image-div" onClick={() => setclickValue(4)}>
            <img
              className="fabric-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpr8vTgAFLzVdk2uy_oVTnW6coc3QNPfH7g&usqp=CAU"
              alt="title or description"
              // style={{ width: "100%", height: "350px" }}
              // data-action="http://andyyou.github.io/react-coverflow/"
            />
          </div>

          <div className="image-div" onClick={() => setclickValue(5)}>
            <img
              className="fabric-image"
              src="https://img.freepik.com/free-photo/sack-cocoa-beans-with-stack-chocolate-bars-wooden-table_23-2147873753.jpg?size=626&ext=jpg"
              alt="title or description"
              // style={{ width: "100%", height: "350px" }}
              // data-action="http://andyyou.github.io/react-coverflow/"
            />
          </div>
          <div className="image-div" onClick={() => setclickValue(6)}>
            <img
              className="fabric-image"
              src="https://img.freepik.com/premium-photo/sex-orgasm-concept-with-banana-crumpled-silk-sheet_695716-196.jpg?size=626&ext=jpg"
              alt="title or description"
              // style={{ width: "100%", height: "350px" }}
              // data-action="http://andyyou.github.io/react-coverflow/"
            />
          </div>
        </Coverflow>
      </div>
      <Description />
      {clickValue == 1 && <div>Thi is first slide</div>}
      {clickValue == 2 && <div>Thi is second slide</div>}
      {clickValue == 3 && <div>Thi is third slide</div>}
      {clickValue == 4 && <div>Thi is fourth slide</div>}
      <Footer></Footer>
    </div>
  );
};

// import React, { useState } from "react";
// import "./Fabrics.css";

// // import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
// import { SliderData } from "./dummyData";

// const Fabric = () => {
//   const [current, setCurrent] = useState(0);
//   const length = SliderData.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(SliderData) || SliderData.length <= 0) {
//     return null;
//   }

//   return (
//     <div className="fabric-container">
//       <h4>Know your Fabric </h4>
//       <section className="slider">
//         <button className="sleft-arrow" onClick={prevSlide}>
//           {" "}
//           left{" "}
//         </button>
//         <button className="sright-arrow" onClick={nextSlide}>
//           {" "}
//           right{" "}
//         </button>
//         {/* <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} /> */}
//         {SliderData.map((slide, index) => {
//           return (
//             <div className={index === current ? "sslide active" : "sslide"} key={index}>
//               {index === current && <img src={slide.image} alt="travel image" className="slider-image" />}
//             </div>
//           );
//         })}
//       </section>
//     </div>
//   );
// };

// export default Fabric;
