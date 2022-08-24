import { getGenres } from '../tools';
import { State } from '../types/state';

export const selectFilmGenres = (state: State) => getGenres(state.films);
