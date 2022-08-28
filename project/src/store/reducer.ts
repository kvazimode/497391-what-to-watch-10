import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, showAll, loadFilms, setIsDataLoaded, setGenres, setAuthStatus } from './action';
import { filterFilms } from '../tools';
import { Films } from '../types/film';
import { AuthStatus } from '../const';

let loadedFilms: Films = [];

type InitState = {
  genre: string,
  films: Films,
  isDataLoaded: boolean,
  genres: string[],
  authStatus: AuthStatus
}

const initState: InitState = {
  genre: 'All genres',
  films: [],
  isDataLoaded: false,
  genres: ['All genres'],
  authStatus: AuthStatus.Unknown,
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
    });
});

export {reducer};

