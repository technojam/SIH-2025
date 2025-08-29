import React from "react";
import MovingCards from "./MovingCards";

function Sponsors() {
  const blurredStyle = {
    filter: "blur(20px)", // Increased blur amount
  };

  return (
    <div
      className="h-screen rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
    >
      <h1 className="text-[#f6921e] text-4xl  font-medium flex justify-center mb-5">
        Sponsors
      </h1>
      <div className="h-full flex flex-col justify-center" >
        <MovingCards key={"sponsors"} items={testimonials} direction="right" speed="fast" />
        <MovingCards key={"sponsorsSecond"} items={testimonials} direction="left" speed="fast" />
      </div>
    </div>
  );
}

const testimonials = [
  {
    src: "/mlsa.png",
  },
  {src:"/xyz.png"},
  {src:"/cake_blue.png"}
];


export default Sponsors;