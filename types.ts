
export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: GameCategory;
  url: string; // The URL to the game's HTML file or embed
}

export enum GameCategory {
  ALL = 'All',
  ACTION = 'Action',
  PUZZLE = 'Puzzle',
  ARCADE = 'Arcade',
  SPORTS = 'Sports',
  STRATEGY = 'Strategy'
}
