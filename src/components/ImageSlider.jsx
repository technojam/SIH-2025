import React from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ImageSlider() {
  const slides = [
    {
      url: "event1.jpg",
    },
    {
      url: "event2.jpg",
    },
    {
      url: "event3.jpg",
    },
    {
      url: "event4.jpg",
    },
    {
      url: "event5.jpg",
    },
    {
      url: "event6.jpg",
    },
    {
      url: "event7.jpg",
    },
    {
      url: "event8.jpg",
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div id="events" className="max-w-[900px] h-[270px] md:h-[600px] lg:h-[610px] w-full m-auto px-4 relative group mb-52">
      <h1 className="text-[#f6921e] text-3xl md:text-4xl  font-medium flex justify-center mb-5" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
        Our Past Events
      </h1>
      <LazyLoadImage src={`${slides[currentIndex].url}`} className="w-full h-full rounded-2xl object-cover duration-500" />
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 mt-16 bg-black/20 text-[#f6921e] cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 mt-16 bg-black/20 text-[#f6921e] cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled className="text-[#f6921e] text-[16px] md:text-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
