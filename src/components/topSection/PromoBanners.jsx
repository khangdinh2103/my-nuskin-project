const PromoBanners = () => {
  const promoData = [
    {
      id: 1,
      title: "PREFER CUSTOMER 2025",
      subtitle: "Winter Collection",
      buttonText: "Shop Now",
      bgImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      bgColor: "from-gray-400 to-gray-600",
      textColor: "text-black"
    },
    {
      id: 2,
      title: "PREFER CUSTOMER 2025", 
      subtitle: "Winter Collection",
      buttonText: "Shop Now",
      bgImage: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80",
      bgColor: "from-blue-400 to-blue-600",
      textColor: "text-black"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 py-4 sm:py-6">
      {promoData.map((promo) => (
        <div
          key={promo.id}
          className={`relative h-32 sm:h-40 lg:h-48 overflow-hidden bg-gradient-to-r ${promo.bgColor} flex items-center group cursor-pointer hover:shadow-lg transition-all duration-300 rounded-lg`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('${promo.bgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Content */}
          <div className={`relative z-10 text-left p-4 sm:p-6 ${promo.textColor} w-full sm:w-1/2`}>
            <p className="text-xs font-medium mb-1 opacity-80">{promo.title}</p>
            <h3 className="text-lg sm:text-xl font-bold mb-2">{promo.subtitle}</h3>
            <button className="bg-white text-gray-900 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium hover:bg-gray-100 transition-colors duration-300 rounded">
              {promo.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromoBanners;
