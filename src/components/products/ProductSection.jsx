import ProductGrid from './ProductGrid';
import ProductSidebar from './ProductSidebar';

const ProductSection = () => {
  return (
    <div className="bg-cyan-50 rounded-lg p-3 sm:p-4 lg:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
        {/* Sidebar - Hidden on mobile and tablet */}
        <div className="hidden lg:block lg:col-span-1">
          <ProductSidebar />
        </div>
        
        {/* Products Grid - Full width on mobile/tablet, 3/4 on desktop */}
        <div className="col-span-1 lg:col-span-3">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
