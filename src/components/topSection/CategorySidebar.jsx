import { useState } from 'react';
import { categories } from '../../models/Category';

const CategorySidebar = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const handleCategoryClick = (category) => {
    if (category.children && category.children.length > 0) {
      toggleCategory(category.id);
    } else {
      // Handle navigation to category page
      console.log('Navigate to:', category.slug);
    }
  };

  return (
    <div className="w-64 bg-white shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-purple-800 text-white px-4 py-3">
        <h2 className="text-lg font-semibold text-left">Categories</h2>
      </div>

      {/* Categories List */}
      <div className="py-2">
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
                    onClick={() => console.log('Navigate to subcategory:', subcategory.slug)}
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
  );
};

export default CategorySidebar;
