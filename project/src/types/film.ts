export type FilmCard = {
  id: number;
  name: string;
  previewImage: string;
  previewVideoLink: string;
}

export type FilmExtra = {
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export type Film = FilmCard & FilmExtra
export type Films = Film[]
