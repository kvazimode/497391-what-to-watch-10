import films from './mocks/films';
import { Film } from './types/film';


export const filterFilms = (genre: string): Film[] => films;
