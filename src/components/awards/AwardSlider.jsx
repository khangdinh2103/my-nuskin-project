import { useState } from 'react';
import AwardCard from './AwardCard';

const AwardSlider = ({ awards }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(awards.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const currentAwards = awards.slice(
    currentSlide * itemsPerSlide,
    (currentSlide + 1) * itemsPerSlide
  );

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:shadow-xl transition-all duration-300 z-10"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:shadow-xl transition-all duration-300 z-10"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Awards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        {currentAwards.map((award, index) => (
          <AwardCard key={index} award={award} />
        ))}
      </div>

      {/* Dots Indicator - Purple dots */}
      {totalSlides > 1 && (
  <div className="flex justify-center space-x-2 mt-4">
    {Array.from({ length: totalSlides }).map((_, index) => (
      <span
        key={index}
        onClick={() => goToSlide(index)}
        className={`cursor-pointer w-3 h-3 rounded-full inline-block transition-colors duration-300 ${
          index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
        }`}
      ></span>
    ))}
  </div>
)}



    </div>
  );
};

export default AwardSlider;
