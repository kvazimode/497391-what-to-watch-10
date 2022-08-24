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
