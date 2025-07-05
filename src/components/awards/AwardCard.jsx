const AwardCard = ({ award }) => {
  return (
    <div className="text-center p-4">
      {/* Award Image */}
      <div className="mb-4  flex justify-center">
        <img 
          src={award.image} 
          alt={award.title}
          className="w-16 h-16 object-contain"
        />
      </div>
      
      {/* Award Title */}
      <h3 className="font-bold text-gray-900 text-sm mb-2">
        {award.title}
      </h3>
      
      {/* Award Details */}
      <div className="text-xs text-gray-600 space-y-1">
        {award.details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default AwardCard;
