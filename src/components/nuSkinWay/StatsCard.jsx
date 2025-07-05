const StatsCard = ({ number, label, description }) => {
  return (
    <div className="text-left">
      <div className="text-4xl font-bold text-gray-600 mb-2">
        {number}
      </div>
      <div className="text-sm font-semibold text-gray-700 mb-1">
        {label}
      </div>
      <div className="text-xs text-gray-500">
        {description}
      </div>
    </div>
  );
};

export default StatsCard;
