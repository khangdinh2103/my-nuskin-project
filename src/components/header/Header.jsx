import { useState } from 'react';
import FAQsLinks from './FAQsLinks';
import SocialMediaIcons from './SocialMediaIcons';
import SearchBar from './SearchBar';
import CartSection from './CartSection';

function Header() {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-purple-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <FAQsLinks />
          <SocialMediaIcons />
        </div>
      </div>

      {/* Main Header Section */}
      <div className="bg-white py-4 border-b border-gray-300">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="w-1/4 md:flex"></div>
          <div className="w-2/4 flex justify-center">
            <SearchBar />
          </div>
          <div className="w-1/4 flex justify-end items-center space-x-4">
            <CartSection />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
