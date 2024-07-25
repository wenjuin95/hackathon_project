import React, { useState } from 'react';

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authOptionsVisible, setAuthOptionsVisible] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleToggleAuthOptions = () => {
    setAuthOptionsVisible(!authOptionsVisible);
  };

  return (
    <header className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-300 text-white h-16 w-full fixed top-0 left-0 z-50">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">ProofOfOrigin</h1>
      </div>
      
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600"
        />
      </div>
      
      <div className="flex items-center space-x-6">
        {authOptionsVisible ? (
          <>
            <button
              onClick={() => alert('Sign In clicked')}
              className="p-3 bg-gray-800 rounded-md hover:bg-gray-700"
            >
              Sign In
            </button>
            <button
              onClick={() => alert('Sign Up clicked')}
              className="p-3 bg-gray-800 rounded-md hover:bg-gray-700"
            >
              Sign Up
            </button>
          </>
        ) : (
          <button
            onClick={handleToggleAuthOptions}
            className="p-3 bg-gray-800 rounded-md hover:bg-gray-700"
          >
            Sign In
          </button>
        )}
        <button
          onClick={handleToggleSidebar}
          className="p-3 bg-gray-600 rounded-md hover:bg-gray-500"
        >
          {sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
      </div>
    </header>
  );
};

export default Header;
