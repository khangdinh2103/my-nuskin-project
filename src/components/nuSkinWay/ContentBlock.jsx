const ContentBlock = ({ title, content, imageSrc, imageAlt, isReversed = false }) => {
  return (
    <div className={`flex flex-col  lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''} `}>
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-80 lg:h-[400px] object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="w-full bg-gray-200 lg:w-1/2 text-left h-80 lg:h-[400px] flex flex-col justify-center p-6 lg:p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <div className="text-gray-600 space-y-4">
          {content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <a href="#" className="mt-6 inline-block text-black underline hover:text-gray-700 transition-colors text-sm font-normal ">
          Explore our projects
        </a>
      </div>
    </div>
  );
};

export default ContentBlock;
