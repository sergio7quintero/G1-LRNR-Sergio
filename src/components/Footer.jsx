import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer className="bg-blue-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quote */}
            <div>
              <p className="mb-4">Embrace the power of our app and unlock the secrets of the universe, one quiz at a time.</p>
              <p>As I always say, 'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.'</p>
            </div>

            {/* Links */}
            <div className="md:text-right">
              <h4 className="text-xl font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Quiz Generator</a></li>
                <li><a href="#" className="hover:underline">Account</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-sm">Made with Tailwind CSS</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
