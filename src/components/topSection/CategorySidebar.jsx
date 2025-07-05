import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../models/Category';

const CategorySidebar = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCategoryClick = (category) => {
    if (category.children && category.children.length > 0) {
      toggleCategory(category.id);
    } else {
      // Navigate to category detail page
      navigate(`/category/${category.slug}`);
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  const handleSubcategoryClick = (subcategory) => {
    navigate(`/category/${subcategory.slug}`);
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-20 left-4 z-50 bg-purple-800 text-white p-2 rounded-md shadow-lg hover:bg-purple-700 transition-colors duration-200"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div className={`
        w-80 bg-white shadow-lg overflow-hidden
        lg:block lg:static lg:translate-x-0
        ${isMobileMenuOpen 
          ? 'fixed top-0 left-0 h-full z-50 translate-x-0' 
          : 'fixed top-0 left-0 h-full z-50 -translate-x-full lg:translate-x-0'
        }
        transition-transform duration-300 ease-in-out
      `}>
        {/* Header */}
        <div className="bg-purple-800 text-white px-4 flex items-center" style={{ height: '60px' }}>
          <h2 className="text-lg font-semibold text-left">Categories</h2>
          {/* Close button for mobile */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden ml-auto text-white hover:text-gray-200"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Categories List */}
        <div className="py-2 h-full overflow-y-auto">
          {categories.map((category) => (
            <div key={category.id} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => handleCategoryClick(category)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="text-gray-700 font-medium">{category.name}</span>
                {category.children && category.children.length > 0 && (
                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      expandedCategories[category.id] ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>

              {/* Subcategories */}
              {category.children && 
               category.children.length > 0 && 
               expandedCategories[category.id] && (
                <div className="bg-gray-50">
                  {category.children.map((subcategory) => (
                    <button
                      key={subcategory.id}
                      onClick={() => handleSubcategoryClick(subcategory)}
                      className="w-full px-8 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {subcategory.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategorySidebar;
