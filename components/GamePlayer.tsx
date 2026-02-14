import React from 'react';
import { Game } from '../types';

interface GamePlayerProps {
  game: Game;
  onBack: () => void;
}

const GamePlayer: React.FC<GamePlayerProps> = ({ game, onBack }) => {
  return (
    <div className="flex flex-col h-[calc(100vh-140px)] animate-in fade-in zoom-in duration-300">
      <div className="flex items-center justify-between mb-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div>
            <h2 className="text-xl font-bold">{game.title}</h2>
            <p className="text-sm text-slate-400">{game.category}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            className="px-4 py-2 bg-slate-700 hover:bg-indigo-600 rounded-lg text-sm font-medium transition-colors"
            onClick={() => {
              const iframe = document.querySelector('iframe');
              if (iframe) {
                iframe.requestFullscreen?.() || (iframe as any).webkitRequestFullscreen?.();
              }
            }}
          >
            Fullscreen
          </button>
        </div>
      </div>
      
      <div className="flex-1 bg-black rounded-xl overflow-hidden shadow-2xl relative border-4 border-slate-800">
        <iframe 
          src={game.url}
          className="w-full h-full"
          title={game.title}
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen; focus-without-user-activation; gamepad"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-4 bg-slate-800/30 p-4 rounded-xl text-slate-300 text-sm leading-relaxed">
        <h4 className="font-bold text-white mb-2 uppercase tracking-wide">About {game.title}</h4>
        {game.description}
      </div>
    </div>
  );
};

export default GamePlayer;