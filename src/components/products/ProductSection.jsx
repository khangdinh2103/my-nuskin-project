import ProductGrid from './ProductGrid';
import ProductSidebar from './ProductSidebar';

const ProductSection = () => {
  return (
    <div className="bg-cyan-50 rounded-lg p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <ProductSidebar />
        </div>
        
        {/* Products Grid */}
        <div className="lg:col-span-3">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
