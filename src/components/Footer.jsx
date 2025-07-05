export default function Footer() {
  return (
    <footer className="bg-[#4B1C5F] text-white text-[15px] pt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 pb-8 ">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <p className="mb-4">
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna,
              ipsum no sit erat lorem et magna ipsum dolore amet erat.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Street, New York, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                <span>info@example.com</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone"></i>
                <span>+012 345 67890</span>
              </li>
            </ul>
          </div>

          {/* Quick Links Container - 2 columns on mobile */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
              {/* Quick Links 1 */}
              <div>
                <h5 className="font-semibold mb-4">Quick Links</h5>
                <ul className="space-y-2 text-left">
                  <li><a href="#" className="!text-white hover:underline">› Home</a></li>
                  <li><a href="#" className="!text-white hover:underline">› Our Shop</a></li>
                  <li><a href="#" className="!text-white hover:underline">› Shop Detail</a></li>
                  <li><a href="#" className="!text-white hover:underline">› Shopping Cart</a></li>
                  <li><a href="#" className="!text-white hover:underline">› Checkout</a></li>
                  <li><a href="#" className="!text-white hover:underline">› Contact Us</a></li>
                </ul>
              </div>

              {/* Quick Links 2 */}
              <div>
                <h5 className="font-semibold mb-4">Quick Links</h5>
                <ul className="space-y-2 text-left">
                  <li><a href="#" className="!text-white ">› Home</a></li>
                  <li><a href="#" className="!text-white ">› Our Shop</a></li>
                  <li><a href="#" className="!text-white ">› Shop Detail</a></li>
                  <li><a href="#" className="!text-white ">› Shopping Cart</a></li>
                  <li><a href="#" className="!text-white ">› Checkout</a></li>
                  <li><a href="#" className="!text-white ">› Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White border line full width */}
      <div className="w-full border-t border-white"></div>

      {/* Bottom Section */}
      <div className="bg-[#3A164D] text-center text-[13px] py-4 px-4 flex flex-col lg:flex-row justify-between items-center">

        <p className="text-white text-center lg:text-left">
          © <span className="font-semibold">Your Site Name</span>. All Rights Reserved.
          Designed by <span className="font-semibold">HTML Codex</span><br className="block lg:hidden" />
          <span className="ml-2">Distributed by ThemeWagon</span>
        </p>

        {/* Payment Icons */}
        <div className="flex justify-center lg:justify-end items-end mt-4 lg:mt-0">
          <div className="flex space-x-2">
          <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="Visa" className="h-6 bg-white rounded p-1" />
            <img src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16" alt="Mastercard" className="h-6 bg-white rounded p-1" />
            <img src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08" alt="PayPal" className="h-6 bg-white rounded p-1" />
            <img src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c" alt="Amex" className="h-6 bg-white rounded p-1" />
            <img src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281" alt="JCB" className="h-6 bg-white rounded p-1" />

          </div>
        </div>
      </div>

    </footer>
  );
}
