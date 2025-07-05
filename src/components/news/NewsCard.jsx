const NewsCard = ({ imageSrc, imageAlt, title, category = "News" }) => {
  return (
    <div className="flex-shrink-0 w-60 bg-white overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative h-48">
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="text-sm font-medium text-gray-900 leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default NewsCard;
