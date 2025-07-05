import { useCart } from '../../contexts/CartContext';

function CartSection() {
  const { getCartItemsCount, getWishlistItemsCount } = useCart();
  
  return (
      <>
        {/* Wishlist */}
        <a href="#" className="text-purple-900 hover:text-purple-700">
          <div className="relative flex items-center border border-gray-300 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="ml-1 text-xs">{getWishlistItemsCount()}</span>
          </div>
        </a>
  
        {/* Cart */}
        <a href="#" className="text-purple-900 hover:text-purple-700">
          <div className="relative flex items-center border border-gray-300 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="ml-1 text-xs">{getCartItemsCount()}</span>
          </div>
        </a>
      </>
    );
  }
  export default CartSection;