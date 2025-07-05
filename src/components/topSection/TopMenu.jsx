import { useNavigate } from 'react-router-dom';

const TopMenu = () => {
  const navigate = useNavigate();

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
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Navigation Menu */}
          <nav className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item)}
                className={`text-lg font-medium transition-colors duration-200 flex items-center space-x-1 ${
                  item.active 
                    ? 'text-purple-800 font-semibold' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
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
              </button>
            ))}
          </nav>

          {/* Right side - Login/Register buttons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
            >
              Login
            </button>
            <button 
              onClick={() => navigate('/')}
              className="bg-purple-600 hover:bg-purple-700  px-4 py-2 rounded font-medium transition-colors duration-200"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
