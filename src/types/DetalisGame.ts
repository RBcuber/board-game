export interface DetaliesGame{
    id: number;
    gameId: number;
    minPlayers: number;
    maxPlayers: number;
    minAge: number;
    durationMin: number | null;
    durationMax: number | null;
    rating: string | null;
}