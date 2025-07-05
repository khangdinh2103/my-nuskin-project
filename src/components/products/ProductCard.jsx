import { getDiscountPercentage } from '../../models/Product';
import { useCart } from '../../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const discountPercent = getDiscountPercentage(product);
  
  const handleAddToCart = () => {
    addToCart(product);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="relative bg-gray-50 aspect-square p-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Sale Badge - chỉ hiển thị nếu có giảm giá */}
        {discountPercent > 0 && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-medium">
            SALE
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        {/* Brand */}
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {product.brand}
        </p>
        
        {/* Product Name */}
        <h3 className="font-medium text-gray-900 mb-2">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-lg font-semibold text-orange-500">
            ${product.salePrice.toFixed(2)}
          </span>
          {product.originalPrice > product.salePrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button 
          onClick={handleAddToCart}
          className="w-full !bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded font-medium transition-colors duration-300 text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
