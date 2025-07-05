function SearchBar() {
    return (
      <div className="relative w-full max-w-md">
        <input 
          type="text" 
          placeholder="Search for products" 
          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    );
  }
  export default SearchBar;