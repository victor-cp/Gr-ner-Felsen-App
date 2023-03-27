import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import { landing } from "../assets";

const Slider = () => {
  const slides = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/database-91457.appspot.com/o/portada%20Gr%C3%BCner%20Felsen%20centre.jpg?alt=media&token=544a3414-392c-475a-9d23-a9e6f868003d",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/database-91457.appspot.com/o/DALL%C2%B7E%202023-03-26%2017.48.34%20-%20complete.png?alt=media&token=96e3d5c4-22f2-411a-8c90-198e47e14325",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/database-91457.appspot.com/o/DALL%C2%B7E%202023-03-26%2023.11.46%20-%20metalurgicaly%20industry.png?alt=media&token=8997ddda-9937-4e56-b9df-f5780c62b177",
    },

    {
      url: "https://firebasestorage.googleapis.com/v0/b/database-91457.appspot.com/o/DALL%C2%B7E%202023-03-26%2023.24.04%20-%20complete2.png?alt=media&token=8da8dacd-cccf-4926-b38b-a3ca3346b28b",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/database-91457.appspot.com/o/DALL%C2%B7E%202023-03-26%2023.32.07%20-%20complete%20with%20minerals.png?alt=media&token=bdd75ba0-9714-4420-8a69-f9bf7c9139eb",
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
