
import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <div 
      className="group bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden cursor-pointer hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
      onClick={() => onClick(game)}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
        <div className="absolute bottom-2 left-2">
          <span className="px-2 py-1 bg-indigo-600/90 text-[10px] font-bold uppercase tracking-wider rounded text-white backdrop-blur-sm">
            {game.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold group-hover:text-indigo-400 transition-colors truncate">
          {game.title}
        </h3>
        <p className="text-sm text-slate-400 line-clamp-2 mt-1 leading-relaxed">
          {game.description}
        </p>
        <button className="mt-4 w-full py-2 bg-slate-700 group-hover:bg-indigo-600 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2">
          Play Now
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GameCard;
