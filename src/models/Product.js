/**
 * @typedef {Object} Product
 * @property {number} id - Mã sản phẩm
 * @property {string} name - Tên sản phẩm
 * @property {string} brand - Tên thương hiệu
 * @property {number} originalPrice - Giá gốc
 * @property {number} salePrice - Giá sau khi giảm
 * @property {string} image - URL hình ảnh chính
 * @property {string} [badge] - Badge sản phẩm (HOT, NEW, SALE, etc.)
 */

/** @type {Product[]} */
export const products = [
  {
    id: 1,
    name: "Pure Pineapple",
    brand: "AGELOC",
    originalPrice: 35.00,
    salePrice: 14.00,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    badge: "HOT"
  },
  {
    id: 2,
    name: "Pure Pineapple",
    brand: "AGELOC",
    originalPrice: 28.00,
    salePrice: 12.99,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    badge: "NEW"
  },
  {
    id: 3,
    name: "Pure Pineapple",
    brand: "AGELOC",
    originalPrice: 32.00,
    salePrice: 18.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    badge: "HOT"
  },
  {
    id: 4,
    name: "Pure Pineapple",
    brand: "AGELOC",
    originalPrice: 45.00,
    salePrice: 22.99,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    badge: "SALE"
  },
  {
    id: 5,
    name: "Vitamin C Serum",
    brand: "AGELOC",
    originalPrice: 42.00,
    salePrice: 29.99,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    badge: "HOT"
  },
  {
    id: 6,
    name: "Hydrating Cream",
    brand: "AGELOC",
    originalPrice: 38.00,
    salePrice: 24.99,
    image: "https://images.unsplash.com/photo-1535334183894-8b6c1fc4e69c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    badge: "NEW"
  },
  {
    id: 7,
    name: "Night Repair Oil",
    brand: "AGELOC",
    originalPrice: 55.00,
    salePrice: 39.99,
    image: "https://images.unsplash.com/photo-1570194071743-85ae72ad53f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    badge: "SALE"
  },
  {
    id: 8,
    name: "Face Cleanser",
    brand: "AGELOC",
    originalPrice: 26.00,
    salePrice: 16.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    badge: "HOT"
  },
  {
    id: 9,
    name: "Eye Cream",
    brand: "AGELOC",
    originalPrice: 48.00,
    salePrice: 32.99,
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    badge: "NEW"
  },
  {
    id: 10,
    name: "Moisturizing Lotion",
    brand: "AGELOC",
    originalPrice: 34.00,
    salePrice: 21.99,
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    badge: "SALE"
  },
  {
    id: 11,
    name: "ageLOC® LumiSpa® iO",
    brand: "NUSKIN",
    originalPrice: 399.99,
    salePrice: 299.99,
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    badge: "FEATURED"
  },
  {
    id: 12,
    name: "Sunscreen SPF 50",
    brand: "AGELOC",
    originalPrice: 29.00,
    salePrice: 19.99,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    badge: "HOT"
  }
];

/**
 * Helper functions để làm việc với products
 */

// Lấy sản phẩm theo ID
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

// Lấy sản phẩm theo thương hiệu
export const getProductsByBrand = (brand) => {
  return products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
};

// Lấy sản phẩm có badge
export const getProductsByBadge = (badge) => {
  return products.filter(product => product.badge === badge);
};

// Lấy sản phẩm đang sale (có giá gốc khác giá sale)
export const getSaleProducts = () => {
  return products.filter(product => product.originalPrice > product.salePrice);
};

// Lấy sản phẩm phổ biến nhất (4 sản phẩm đầu tiên)
export const getPopularProducts = (limit = 4) => {
  return products.slice(0, limit);
};

// Tính phần trăm giảm giá
export const getDiscountPercentage = (product) => {
  if (product.originalPrice <= product.salePrice) return 0;
  return Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100);
};

// Tìm kiếm sản phẩm theo tên
export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery)
  );
};
