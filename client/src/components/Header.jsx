import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-5 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <nav className="mt-2">
          <ul className="flex flex-wrap">
            <li>
              <Link to="/" className="text-lg mx-4 hover:underline transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="/drought" className="text-lg mx-4 hover:underline transition duration-300">Drought Intensity</Link>
            </li>
            <li>
              <Link to="/desertification" className="text-lg mx-4 hover:underline transition duration-300">Desertification Status</Link>
            </li>
            <li>
              <Link to="/remediation" className="text-lg mx-4 hover:underline transition duration-300">Remediation Methods</Link>
            </li>
            <li>
              <Link to="/map" className="text-lg mx-4 hover:underline transition duration-300">Interactive Map</Link>
            </li>
            <li>
              <Link to="/resources" className="text-lg mx-4 hover:underline transition duration-300">Resources</Link>
            </li>
            <li>
              <Link to="/contact" className="text-lg mx-4 hover:underline transition duration-300">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
