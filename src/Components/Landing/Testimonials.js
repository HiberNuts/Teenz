import React, { useState } from "react";
import "./testimonitals.css";

const dummyData = [
  {
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    content:
      "'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'",
    name: "Lessli brook",
  },

  {
    img: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=400",
    content:
      "'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using .'",
    name: "Alen turning",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0UBh6SYtyIhCLI6SFzPKkPZzpgycQDGdgA&usqp=CAU",
    content:
      "'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.'",
    name: "Cecelia",
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxERfeH8CH5Hfr-fdowRXIGzqlilsEzmPzg&usqp=CAU",
    content:
      "'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using .'",
    name: "Gausman",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState(dummyData);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonialscontianer" id="testimonialsdiv">
      <div className="testWrapper">
        <h2>Testimonials</h2>
        {testimonials.length && (
          <div className="individuals">
            <div className="individuals-test">
              <img src={testimonials[currentIndex].img}></img>
              <div className="testimonial-content">
                <p className="testi-text">{testimonials[currentIndex].content}</p>
                <h4 className="testi-name">{testimonials[currentIndex].name}</h4>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="test-btns">
        <button
          type="button"
          onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
        >
          &lt;{" "}
        </button>
        <button onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
          &gt;
        </button>
      </div>
    </div>
  );
};
