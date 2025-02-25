import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-2xl font-bold">lrnr</div>
      <div className="space-x-4">
        <a href="#" className="text-white hover:underline">Account</a>
        <a href="#" className="text-white hover:underline">Quiz Generation</a>
      </div>
    </div>
  </nav>
  );
};

export default Nav;