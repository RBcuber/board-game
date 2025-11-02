export interface GamesFilter {
  games: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
  game_details: {
    id: number;
    gameId: number;
    minPlayers: number;
    maxPlayers: number;
    minAge: number;
    durationMin: number;
    durationMax: number;
    rating: string;
  };
  game_categories: {
    gameId: number;
    categoriesId: number;
  };
  categories: {
    id: number;
    name: string;
  };
}
