import { AuthStatus } from './const';
import { Film } from './types/film';

export const filterFilms = (genre: string, films: Film[]): Film[] => films.filter((film) => film.genre === genre);
export const getGenres = (films: Film[]) => {
  const genres = new Set<string>(['All genres']);
  films.forEach((film) => {
    genres.add(film.genre);
  });
  return Array.from(genres);
};
export const cropList = (list: Film[], amount: number) => list.slice(0, amount);

export const isAuthChecked = (authStatus: AuthStatus): boolean => authStatus === AuthStatus.Unknown;

export const getRatingLevel = (score: number) => {
  if (score === 10) {return 'Awesome';}
  if (score < 10 && score >= 8) {return 'Very good';}
  if (score < 8 && score >= 5) {return 'Good';}
  if (score < 5 && score >= 3) {return 'Normal';}
  if (score < 3 && score >= 0) {return 'Bad';}
};
