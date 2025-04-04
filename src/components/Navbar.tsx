"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Set active link based on current path
    setActiveLink(window.location.pathname);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-2 bg-background/95 backdrop-blur-md shadow-md border-b border-primary/20' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left side navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/services', label: 'Services' },
              { href: '/about', label: 'About' }
            ].map(link => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`relative px-4 py-2 text-foreground transition-colors ${
                  activeLink === link.href 
                    ? 'font-medium' 
                    : 'hover:text-primary'
                }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
            ))}
          </div>
          
          {/* Center logo */}
          <div className="flex justify-center flex-grow md:flex-grow-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <Link href="/" className="flex items-center">
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mr-3">
                <span className="text-foreground font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-semibold tracking-tight text-foreground">
                Go-First<span className="text-primary font-bold">Tech</span>
              </span>
            </Link>
          </div>
          
          {/* Right side navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: '/pricing', label: 'Pricing' },
              { href: '/blog', label: 'Blog' },
              { href: '/resources', label: 'Resources' }
            ].map(link => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`relative px-4 py-2 text-foreground transition-colors ${
                  activeLink === link.href 
                    ? 'font-medium' 
                    : 'hover:text-primary'
                }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
            ))}
            <div className="h-6 mx-2 border-l border-foreground/20"></div>
            <Link 
              href="/contact" 
              className="relative overflow-hidden px-6 py-2 rounded-full bg-secondary text-foreground font-medium hover:bg-primary transition-all duration-300"
            >
              Contact Us
            </Link>
            <div className="pl-3 ml-1">
              <ThemeToggle />
            </div>
          </div>
          
          {/* Mobile logo (left-aligned) */}
          <div className="md:hidden flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center mr-3">
                <span className="text-foreground font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-semibold tracking-tight text-foreground">
                Go-First<span className="text-primary font-bold">Tech</span>
              </span>
            </Link>
          </div>
          
          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-primary/10 backdrop-blur-md shadow-lg animate-fadeDown">
          <div className="px-4 py-3 space-y-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/services', label: 'Services' },
              { href: '/about', label: 'About' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/blog', label: 'Blog' },
              { href: '/resources', label: 'Resources' }
            ].map(link => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`block py-2 px-3 rounded-lg ${
                  activeLink === link.href 
                    ? 'bg-primary/10 text-primary font-medium' 
                    : 'text-foreground hover:bg-secondary/30'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-foreground/10">
              <Link 
                href="/contact" 
                className="block w-full py-3 mt-1 text-center bg-secondary text-foreground rounded-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 