"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" container py-4">
      <div className=''>
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <span className="text-blue text-lg font-bold">
            <Link href="/">
              Asia <span className="text-darkBlue">Job</span>Swipe
            </Link>
          </span>

          {/* Hamburger Menu (for mobile) */}
          <div className="md:hidden">
            <button
              className="text-blue focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex md:items-center">
            <Link href="/findjobs">
              <span className="text-darkGrey text-sm px-4 py-2 block md:inline cursor-pointer">Find Jobs</span>
            </Link>
            <Link href="/about">
              <span className="text-darkGrey text-sm px-4 py-2 block md:inline cursor-pointer">Job Offers</span>
            </Link>
            <Link href="/services">
              <span className="text-darkGrey text-sm px-4 py-2 block md:inline cursor-pointer">Matched Jobs</span>
            </Link>
            <Link href="/contact">
              <span className="text-darkGrey text-sm px-4 py-2 block md:inline cursor-pointer">Saved Jobs</span>
            </Link>
            <Link href="/contact">
              <span className="text-darkGrey text-sm px-4 py-2 block md:inline cursor-pointer">Browse Companies</span>
            </Link>
          </div>

          {/* Right Side (Sign-in Button) */}
          <div className="hidden md:block">
            <Button asChild>
              <Link className="bg-blue text-white text-sm px-4 py-2 rounded-md" href="/signin">Sign In</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Background */}
        {isOpen && (
          <div className="bg-white mt-4 p-4 rounded-lg shadow-lg md:hidden">
            <Link href="/findjobs">
              <span className="text-darkGrey text-sm px-4 py-2 block cursor-pointer">Find Jobs</span>
            </Link>
            <Link href="/about">
              <span className="text-darkGrey text-sm px-4 py-2 block cursor-pointer">Job Offers</span>
            </Link>
            <Link href="/services">
              <span className="text-darkGrey text-sm px-4 py-2 block cursor-pointer">Matched Jobs</span>
            </Link>
            <Link href="/contact">
              <span className="text-darkGrey text-sm px-4 py-2 block cursor-pointer">Saved Jobs</span>
            </Link>
            <Link href="/contact">
              <span className="text-darkGrey text-sm px-4 py-2 block cursor-pointer">Browse Companies</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Menu;
