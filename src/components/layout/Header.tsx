'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Arpit Patel
        </Link>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
            <li>
              <Link href="/" className="block py-2 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="block py-2 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="block py-2 hover:text-blue-600">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#experience" className="block py-2 hover:text-blue-600">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="block py-2 hover:text-blue-600">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#contact" className="block py-2 hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;