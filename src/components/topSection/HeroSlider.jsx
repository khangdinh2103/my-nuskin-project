import { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "10% OFF YOUR FIRST ORDER",
      subtitle: "Reasonable Price",
      description: "Discover our amazing collection with special discount for new customers",
      buttonText: "Shop Now",
      bgImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      bgColor: "from-purple-900 to-purple-700"
    },
    {
      id: 2,
      title: "NEW WINTER COLLECTION",
      subtitle: "Fashion Forward",
      description: "Stay warm and stylish with our latest winter fashion trends",
      buttonText: "Explore Now",
      bgImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
      bgColor: "from-blue-900 to-blue-700"
    },
    {
      id: 3,
      title: "SUMMER SALE",
      subtitle: "Up to 50% Off",
      description: "Beat the heat with our cooling summer collection at unbeatable prices",
      buttonText: "Shop Sale",
      bgImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80')",
      bgColor: "from-orange-900 to-red-700"
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`min-w-full h-full bg-gradient-to-r ${slide.bgColor} flex items-center justify-center relative`}
            style={{
              backgroundImage: slide.bgImage,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="text-center text-white z-10 max-w-2xl px-4 sm:px-6 lg:px-8">
              <p className="text-xs sm:text-sm font-medium mb-2 opacity-90">{slide.title}</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">{slide.subtitle}</h1>
              <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 opacity-90 max-w-lg mx-auto">{slide.description}</p>
              <button className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 !bg-black !bg-opacity-10 hover:bg-opacity-30 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300 opacity-70 hover:opacity-100"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 !bg-black !bg-opacity-10 hover:bg-opacity-30 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300 opacity-70 hover:opacity-100"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      
    </div>
  );
};

export default HeroSlider;
