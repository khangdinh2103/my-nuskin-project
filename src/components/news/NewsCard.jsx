const NewsCard = ({ imageSrc, imageAlt, title, category = "News" }) => {
  return (
    <div className="flex-shrink-0 w-40 xs:w-48 sm:w-60 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative h-32 xs:h-40 sm:h-48">
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-medium text-gray-700">
          {category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-900 leading-tight truncate overflow-hidden whitespace-nowrap">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default NewsCard;
