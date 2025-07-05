import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const TopMenu = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, name: 'Home', path: '/', active: true },
    { id: 2, name: 'Shop', path: '/' },
    { id: 3, name: 'Shop Detail', path: '/' },
    { id: 4, name: 'Pages', path: '/', hasDropdown: true },
    { id: 5, name: 'Contact', path: '/' }
  ];

  const handleMenuClick = (item) => {
    if (!item.hasDropdown) {
      navigate(item.path);
    }
    setIsMobileMenuOpen(false); // Đóng menu khi click
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 mb-4">
      <div className="px-2 sm:px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center p-2 text-gray-700 hover:text-purple-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-3 sm:space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item)}
                className={`text-sm sm:text-base lg:text-lg font-medium transition-colors duration-200 flex items-center space-x-1 whitespace-nowrap ${
                  item.active 
                    ? 'text-purple-800 font-semibold' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"
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
            ))}
          </nav>

          {/* Right side - Login/Register buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button 
              onClick={() => navigate('/')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 text-sm sm:text-base"
            >
              Login
            </button>
            <button 
              onClick={() => navigate('/')}
              className="bg-purple-600 hover:bg-purple-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded font-medium transition-colors duration-200 text-sm sm:text-base"
            >
              Register
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 border-t border-gray-200 pt-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item)}
                className={`block w-full text-left py-2 px-2 text-base font-medium transition-colors duration-200 ${
                  item.active 
                    ? 'text-purple-800 font-semibold bg-purple-50' 
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4 text-gray-500"
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
                </div>
              </button>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default TopMenu;
