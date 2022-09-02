import { AuthStatus, MAX_GENRES } from './const';
import { Film } from './types/film';

export const filterFilms = (genre: string, films: Film[]): Film[] => films.filter((film) => film.genre === genre);
export const getGenres = (films: Film[]) => {
  const genres = new Set<string>(['All genres']);
  films.forEach((film) => {
    genres.add(film.genre);
  });
  const croppedGenres = Array.from(genres);
  return croppedGenres.slice(0, MAX_GENRES);
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

export const makeStarring = (actors: string[] | undefined, splitter: string) => {
  if (!actors) {
    return;
  }
  return actors.join(splitter);
};

export const parseRunTime = (time: number): string => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}m`;
};

export const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const getLongDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
};

export const getShortDate = (date: Date): string => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

export const parsePlayerRunTime = (time: number) => {
  const twoDigitTime = (number: number) => number < 10 ? `0${number}` : number;
  const minutes = Math.floor(time / 60);
  const hours = Math.floor(minutes / 60);
  const seconds = time % 60;
  return `-${hours ? twoDigitTime(hours) : ''}${minutes ? twoDigitTime(minutes) : '00:'}${twoDigitTime(seconds)}`;
};
