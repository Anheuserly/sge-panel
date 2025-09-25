//components/Navigation.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="h-8 w-8 mr-2 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">
              A
            </div>
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              amcmep.in
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                href="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'text-indigo-600 bg-indigo-100' : 'text-gray-900 hover:text-indigo-600'}`}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/services') ? 'text-indigo-600 bg-indigo-100' : 'text-gray-900 hover:text-indigo-600'}`}
              >
                Services
              </Link>
              <Link 
                href="/partners" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/partners') ? 'text-indigo-600 bg-indigo-100' : 'text-gray-900 hover:text-indigo-600'}`}
              >
                Partners
              </Link>
              <Link 
                href="/about" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about') ? 'text-indigo-600 bg-indigo-100' : 'text-gray-900 hover:text-indigo-600'}`}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/contact') ? 'text-indigo-600 bg-indigo-100' : 'text-gray-900 hover:text-indigo-600'}`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-indigo-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link 
              href="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-indigo-600 bg-indigo-100' : 'text-gray-900 hover:text-indigo-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services') ? 'text-indigo-600 bg-indigo-100' : 'text-gray-900 hover:text-indigo-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/partners" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/partners') ? 'text-indigo-600 bg-indigo-100' : 'text-gray-900 hover:text-indigo-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </Link>
            <Link 
              href="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-indigo-600 bg-indigo-100' : 'text-gray-900 hover:text-indigo-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-indigo-600 bg-indigo-100' : 'text-gray-900 hover:text-indigo-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}