import { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import NewsSlider from './NewsSlider';

const NewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4;
  const itemsToShow = 4; // Luôn hiển thị 4 items
  
  const newsItems = [
    {
      imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&crop=center",
      imageAlt: "Beauty Products",
      title: "38 New Beauty Products Our Editors Are Loving This December"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop&crop=center",
      imageAlt: "Skincare Products", 
      title: "The Ultimate Guide to Anti-Aging Skincare Routine"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=200&fit=crop&crop=center",
      imageAlt: "Beauty Review",
      title: "Best Beauty Innovations of 2024: A Complete Review"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center",
      imageAlt: "Beauty Tips",
      title: "Professional Makeup Tips for Flawless Skin"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=200&fit=crop&crop=center",
      imageAlt: "Wellness Products",
      title: "Nu Skin's Revolutionary Wellness Technology Breakthrough"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center",
      imageAlt: "Skincare Innovation",
      title: "Latest Breakthrough in Advanced Skincare Science"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=300&h=200&fit=crop&crop=center",
      imageAlt: "Beauty Awards",
      title: "Nu Skin Wins Multiple International Beauty Awards"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=300&h=200&fit=crop&crop=center",
      imageAlt: "Technology News",
      title: "The Future of Personalized Beauty Technology"
    }
  ];

  const totalSlides = newsItems.length - itemsToShow + 1; // Số lượng vị trí có thể scroll

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const currentNewsItems = newsItems.slice(
    currentSlide,
    currentSlide + itemsToShow
  );

  return (
    <div className="py-8 bg-gray-50">
      <SectionTitle 
          title="Nu Skin In The News" 
        />
      <div className="px-8 mx-auto px-4">
        

        <div className="flex items-center gap-8">
          {/* Left side - News Cards (3/4) */}
          <div className="w-3/4 flex flex-col justify-center relative">
            {/* View All Link - positioned at top right of this section */}
            <div className="flex justify-end mb-4">
              <a 
                href="#" 
                className="text-gray-600 hover:text-gray-800 text-sm font-medium underline transition-colors"
              >
                View All &gt;&gt;
              </a>
            </div>

            {/* Navigation arrows positioned on sides */}
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


            <div className="grid grid-cols-4 gap-4">
              {currentNewsItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 text-center">
                    <h3 className="text-sm font-medium text-gray-900 leading-tight line-clamp-3 group-hover:text-purple-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dots indicator */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right side - News Panel (1/4) */}
          <div className="w-1/4 flex-shrink-0">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=200&fit=crop&crop=center"
                alt="Nu Skin News"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-center items-center p-6">
                  <div className="text-white text-center">
                    <h2 className="text-4xl font-bold mb-2">News</h2>
                    <p className="text-base opacity-90 underline">Nu Skin In The News</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
