const SectionTitle = ({ 
  title, 
  bgColor = "bg-purple-800", 
  textColor = "text-white",
  className = "",
  variant = "default" // "default", "centered", "left"
}) => {
  const baseClasses = "px-6 py-3 font-semibold text-3xl rounded-lg inline-flex items-center relative";
  
  const variantClasses = {
    default: "mx-auto",
    centered: "mx-auto",
    left: ""
  };

  const containerClasses = {
    default: "flex justify-center mb-6",
    centered: "flex justify-center mb-6",
    left: "flex justify-start mb-6"
  };

  return (
    <div className={containerClasses[variant]}>
      <div className={`${baseClasses} ${bgColor} ${textColor} ${variantClasses[variant]} ${className}`}>
        <div className="w-8 h-0.5 bg-white absolute left-2 top-1/2 transform -translate-y-1/2"></div>
        <span className="px-4">{title}</span>
        <div className="w-8 h-0.5 bg-white absolute right-2 top-1/2 transform -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
