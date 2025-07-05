import { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../../models/Product';

const ProductGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="bg-cyan-50 rounded-lg p-6 relative">
      {/* Filter Tabs */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-8">
          <button className="text-gray-900 border-b-2 border-orange-400 pb-2 font-medium text-sm">
            DESCRIPTION
          </button>
          <button className="text-gray-400 hover:text-gray-600 pb-2 text-sm">
            SPECIFICATIONS
          </button>
        </div>
        <button className="text-gray-900 hover:text-gray-700 font-medium text-sm">
          View All &gt;&gt;
        </button>
      </div>

      {/* Products Grid with Navigation */}
      <div className="relative">
        {/* Previous Arrow */}
        {currentIndex > 0 && (
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:shadow-xl transition-all duration-300 z-10"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Next Arrow */}
        {currentIndex < maxIndex && (
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:shadow-xl transition-all duration-300 z-10"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, index) => {
            const isActive = Math.floor(currentIndex / itemsPerPage) === index;
            return (
            <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                className={`h-1 rounded transition-all duration-300 ${
                isActive ? 'w-6 !bg-purple-800' : 'w-2 bg-gray-300'
                }`}
            />
            );
        })}
        </div>

    </div>
  );
};

export default ProductGrid;
