'use client';
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth'; // Replace with your signOut logic
import React, { useRef, useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Logout from './logout';

interface SideNavProps {}

const SideNav: React.FC<SideNavProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Close the drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && sideNavRef.current && !sideNavRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div>
<div>
  <nav className="fixed top-0 left-0 right-0 h-16 bg-gray-800 z-50 flex items-center px-4">
    
    
    <button
      className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md p-2 relative"
      onClick={toggleDrawer}
    >
      <MenuIcon />
      <span className="ml-2 absolute top-0 mt-2.5 -translate-y-fulll">Menu</span>
    </button>
    <div className="flex-1 text-center text-white">
          <h1 className="text-lg font-semibold">Welcome to the Web-RTC Call-Center!</h1>
    </div>
   
    {/* Your Acme Logo here */}
    {/* <AcmeLogo /> */}

    {/* Profile icon */}
    <div className="ml-auto">
      <img
        src="/profile.png"
        alt="Profile Icon"
        className="w-8 h-8 rounded-full"
      />
    </div>
  </nav>
</div>

      <div
        ref={sideNavRef}
        className={`side-nav fixed left-0 top-0 bottom-0 w-64 bg-gray-800 text-white rounded-r-md mt-16 p-4 transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full mt-4">
          <div className="flex-grow space-y-4">
            {/* Pass the closeDrawer function as a prop */}
            <NavLinks closeDrawer={() => setIsOpen(false)} />
          </div>
          <div className="mb-4">
            <button
              className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              // onClick={signOut}
              // Replace with your signOut function
              onClick={async (e) => {
                e.preventDefault();
                await Logout(); // Call the function directly (experimental)
                // Handle redirection if needed
              }}
            >
              <span>Sign Out</span>
              <PowerIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-30 bg-black bg-opacity-25 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
};

export default SideNav;
