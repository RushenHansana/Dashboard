// components/AdminNavBar.js
import Link from 'next/link';

const AdminNavBar = () => {
  

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button className="text-white px-3 py-2 rounded-md text-sm font-medium">
              {/* Menu Icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            {/* Search Bar */}
            <div className="ml-3 relative">
              <input
                type="text"
                className="bg-gray-900 text-white rounded-full px-3 py-2 pl-10 focus:outline-none focus:shadow-outline"
                placeholder="Search..."
                
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* Search Icon */}
                <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11L7 7m0 0a5 5 0 1110 0 5 5 0 01-10 0z" />
                </svg>
              </div>
            </div>
          </div>
          {/* Profile Section */}
          <div className="ml-4 flex items-center md:ml-6">
            <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
              {/* Profile Icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 11.121A8.962 8.962 0 0112 4a8.962 8.962 0 016.879 7.121M12 16v8m-4-4h8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;
