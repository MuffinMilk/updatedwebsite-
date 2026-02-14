
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-slate-800 py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight uppercase">awdre's games</span>
          </div>
          <p className="text-slate-500 text-sm max-w-xs">
            Your premium destination for unblocked browser games. Fast, secure, and always fun.
          </p>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <h5 className="font-bold text-slate-300 mb-2">Platform</h5>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Games</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">New Releases</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Most Popular</a>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-bold text-slate-300 mb-2">Legal</h5>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Terms of Use</a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-slate-600 text-xs">
        &copy; {new Date().getFullYear()} awdre's games Hub. All rights reserved. Not affiliated with any listed game developers.
      </div>
    </footer>
  );
};

export default Footer;
