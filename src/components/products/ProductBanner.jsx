const ProductBanner = () => {
  return (
   <div className="bg-gray-200 rounded-lg overflow-hidden px-6 py-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
    
    {/* Image Section */}
    <div className="flex justify-center">
      <div className="relative w-full max-min-[1000px]  px-6">
        <img 
          src="https://images.contentstack.io/v3/assets/blt7d4c4f4a1bf5a819/blt61389e3ec5974185/66a88d62c10344acda06735e/ageLOC-LumiSpa-iO.jpg?width=412"
          alt="ageLOC LumiSpa iO"
          className="w-full h-auto object-contain"
        />
        {/* Purple Badge */}
       <div className="absolute top-4 right-4 bg-purple-700 text-white w-16 h-16 rounded-full flex flex-col items-center justify-center text-center shadow-md">
            <span className="text-[10px] font-semibold leading-none">Sale Of</span>
            <span className="text-sm font-bold leading-none">$29.99</span>
            </div>
      </div>
    </div>

    {/* Content Section */}
    <div className="flex items-center justify-start px-6">
      <div className="text-left max-w-md">
        <p className="text-xs text-red-500 mb-2 uppercase tracking-wider font-semibold">
          AGELOC® LUMISPA® IO
        </p>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          ageLOC® LumiSpa® iO
        </h2>
        <p className="text-gray-600 mb-6">
          Elevate your skincare routine
        </p>
        <button className="!bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded font-bold uppercase tracking-wide transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default ProductBanner;
