import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, showAll, loadFilms, setIsDataLoaded, setGenres, setAuthStatus, loadFilm, loadSimilar, setIsFilmLoaded } from './action';
import { filterFilms } from '../tools';
import { Films, Film } from '../types/film';
import { AuthStatus } from '../const';

let loadedFilms: Films = [];

type InitState = {
  genre: string,
  films: Films,
  isDataLoaded: boolean,
  genres: string[],
  authStatus: AuthStatus,
  film: Film | Record<string, never>,
  similar: Films,
  isFilmLoaded: boolean,
}

const initState: InitState = {
  genre: 'All genres',
  films: [],
  isDataLoaded: false,
  genres: ['All genres'],
  authStatus: AuthStatus.Unknown,
  film: {},
  similar: [],
  isFilmLoaded: false,
};

const reducer = createReducer(initState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
      state.films = filterFilms(genre, loadedFilms);
    })
    .addCase(showAll, (state) => {
      state.genre = initState.genre;
      state.films = loadedFilms;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      loadedFilms = action.payload;
    })
    .addCase(setIsDataLoaded, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setGenres, (state, action) => {
      state.genres = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadSimilar, (state, action) => {
      state.similar = action.payload;
    })
    .addCase(setIsFilmLoaded, (state, action) => {
      state.isFilmLoaded = action.payload;
    });
});

export {reducer};

