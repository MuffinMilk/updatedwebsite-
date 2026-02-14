
import React from 'react';

interface NavbarProps {
  onHomeClick: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick, searchQuery, onSearchChange }) => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 py-3 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div 
        className="flex items-center gap-2 cursor-pointer group" 
        onClick={onHomeClick}
      >
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent uppercase">
          awdre's games
        </span>
      </div>

      <div className="relative w-full sm:w-96">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search for games..."
          className="w-full bg-slate-800 border border-slate-700 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm placeholder-slate-500"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="hidden lg:flex items-center gap-6">
        <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>Home</a>
        <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Popular</a>
        <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
