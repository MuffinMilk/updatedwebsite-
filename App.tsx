
import React, { useState, useMemo } from 'react';
import { Game, GameCategory } from './types';
import { GAMES } from './constants';
import Navbar from './components/Navbar';
import GameCard from './components/GameCard';
import GamePlayer from './components/GamePlayer';
import Footer from './components/Footer';

function App() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [activeCategory, setActiveCategory] = useState<GameCategory>(GameCategory.ALL);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = useMemo(() => {
    return GAMES.filter((game) => {
      const matchesCategory = activeCategory === GameCategory.ALL || game.category === activeCategory;
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            game.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleBackToHome = () => {
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onHomeClick={handleBackToHome} 
        searchQuery={searchQuery} 
        onSearchChange={setSearchQuery} 
      />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-8">
        {!selectedGame ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Hero Section */}
            <div className="mb-12 relative overflow-hidden rounded-3xl bg-indigo-600 px-8 py-12 md:px-12 md:py-20 text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="z-10 relative md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                  UNLIMITED <br /> <span className="text-indigo-200">UNBLOCKED</span> FUN
                </h1>
                <p className="text-indigo-100 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
                  Access the web's best collection of browser-based games instantly. No downloads, no blocked sites, just pure gaming.
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setActiveCategory(GameCategory.ARCADE)}
                    className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-xl"
                  >
                    Start Playing
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-full absolute -top-10 -right-10 blur-3xl animate-pulse"></div>
                <img 
                  src="https://picsum.photos/seed/gamehero/600/600" 
                  alt="Gaming" 
                  className="w-full max-w-md rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex overflow-x-auto gap-2 pb-4 mb-8 no-scrollbar scroll-smooth">
              {Object.values(GameCategory).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                    activeCategory === cat 
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Game Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.length > 0 ? (
                filteredGames.map((game) => (
                  <GameCard 
                    key={game.id} 
                    game={game} 
                    onClick={setSelectedGame} 
                  />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-full mb-4">
                    <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-300">No games found</h3>
                  <p className="text-slate-500 mt-1">Try adjusting your search or category filter.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <GamePlayer game={selectedGame} onBack={handleBackToHome} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
