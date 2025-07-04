import React from 'react';
import { Link } from 'react-router-dom';

// Images
import oops from '../Images/oops.png';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <img src={oops} alt="Page Not Found" className="w-1/2 mb-6" />
      <h3 className="text-6xl font-bold text-gray-800 text-[var(--dark-main)] py-3">404 - PAGE NOT FOUND</h3>
      <p className="mt-2 text-gray-500 w-1/3">
        The page you are looking for may have been removed, renamed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-10 py-3 bg-[var(--dark-main)] text-white rounded hover:bg-[var(--orange-main)] text-3xl transition duration-300"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;