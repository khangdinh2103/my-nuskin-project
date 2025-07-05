const AwardCard = ({ award }) => {
  return (
    <div className="text-center p-4 bg-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
      {/* Award Image */}
      <div className="mb-4 flex justify-center">
        <img 
            src={award.image} 
            alt={award.title}
            className="w-16 h-16 object-contain rounded-full group-hover:scale-110 transition-transform duration-300"
        />
        </div>

      
      {/* Award Title */}
      <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-purple-600 transition-colors duration-300">
        {award.title}
      </h3>
      
      {/* Award Details */}
      <div className="text-base text-gray-600 space-y-1 group-hover:text-gray-800 transition-colors duration-300">
        {award.details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default AwardCard;
