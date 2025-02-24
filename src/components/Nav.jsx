import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2894f4] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">LRNR</Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm">
            <Link
              to="/account"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-4"
            >
              Account
            </Link>
            <Link
              to="/quiz"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black"
            >
              Quiz Generation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;