import ProductSidebarBg from '../../assets/ProductSlidebar.png';

const ProductSidebar = () => {
  return (
    <div 
      className="rounded-lg p-6 h-full relative overflow-hidden"
      style={{
        backgroundImage: `url(${ProductSidebarBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 leading-tight">
          Find out<br />
          what<br />
          everyone's<br />
          talking<br />
          about
        </h3>
        
        {/* Browse Link */}
        <div className="mb-6">
          <a 
            href="#" 
            className="text-teal-600 hover:text-teal-700 transition-colors duration-200 text-sm font-medium"
          >
            Browse our best
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
