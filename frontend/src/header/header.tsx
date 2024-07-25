import React, { useState } from 'react';

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authOptionsVisible, setAuthOptionsVisible] = useState(false);
  const [signInClicked, setSignInClicked] = useState(false);
  const [signUpClicked, setSignUpClicked] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleToggleAuthOptions = () => {
    setAuthOptionsVisible(!authOptionsVisible);
  };

  const handleSignInClick = () => {
    setSignInClicked(true);
    setTimeout(() => setSignInClicked(false), 300);
  };

  const handleSignUpClick = () => {
    setSignUpClicked(true);
    setTimeout(() => setSignUpClicked(false), 300); 
  };

  return (
    <header className="flex items-center justify-between p-6 bg-gray-900 text-white h-16 w-full fixed top-0 left-0 z-50">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Secure Artistry</h1>
      </div>
      
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600"
        />
      </div>
      
      <div className="flex items-center space-x-6 relative group">
        <button
          onClick={() => alert('Explore clicked')}
          className="bg-gray-900 text-white hover:underline transition-colors duration-300"
        >
          Explore
        </button>
        <button
          onClick={() => alert('Pricing clicked')}
          className="bg-gray-900 text-white hover:underline transition-colors duration-300"
        >
          Pricing
        </button>
        <button
          onClick={() => alert('Upload clicked')}
          className="bg-gray-900 text-white hover:underline transition-colors duration-300"
        >
          Upload
        </button>
        {authOptionsVisible ? (
          <>
            <button
              onClick={handleSignInClick}
              className={`p-3 bg-gray-900 rounded-md hover:bg-gray-700 flex items-center space-x-2 transition-transform duration-300 ${signInClicked ? 'scale-95' : ''}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M10 11H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V13H10V16L15 12L10 8V11Z"></path>
              </svg>
              <span>Sign In</span>
            </button>
            <button
              onClick={handleSignUpClick}
              className={`p-3 bg-gray-900 rounded-md hover:bg-gray-700 flex items-center space-x-2 transition-transform duration-300 ${signUpClicked ? 'scale-95' : ''}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.5 7H8V17H10V14H12.217L14.397 17H16.869L14.3191 13.4907C15.327 12.8763 16 11.7668 16 10.5C16 8.63144 14.5357 7.10487 12.692 7.00518L12.5 7ZM12.5 9C13.2797 9 13.9204 9.59489 13.9931 10.3555L14 10.5L13.9931 10.6445C13.925 11.3576 13.3576 11.925 12.6445 11.9931L12.5 12H10V9H12.5Z"></path>
              </svg>
              <span>Sign Up</span>
            </button>
          </>
        ) : (
          <button
            onClick={handleToggleAuthOptions}
            className="p-3 bg-gray-900 rounded-md hover:bg-gray-700 flex items-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2ZM9 11V8L4 12L9 16V13H15V11H9Z"></path>
            </svg>
            <span>Sign In</span>
          </button>
        )}
        
        <button
          onClick={handleToggleSidebar}
          className="p-3 bg-gray-900 rounded-md hover:bg-gray-700 flex items-center justify-center relative group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-6 h-6 transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : 'rotate-0'}`}
          >
            <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM9 5V19H20V5H9Z"></path>
          </svg>
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-48 p-2 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Toggle On/Off Sidebar
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
