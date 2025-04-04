"use client";

import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Initialize theme from localStorage or system preference on component mount
  useEffect(() => {
    // Check if a theme is stored in localStorage
    const storedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    } else {
      // If no theme is stored, check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      data-theme={theme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Moon icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="moon-icon"
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
      
      {/* Sun icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="sun-icon" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
      </svg>
      
      <span className="theme-toggle-thumb"></span>
      <span className="sr-only">
        {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </button>
  );
};

export default ThemeToggle; 