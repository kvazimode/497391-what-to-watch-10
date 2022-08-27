import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, showAll, loadFilms } from './action';
import { filterFilms } from '../tools';
import { Films } from '../types/film';

let loadedFilms: Films = [];

type InitState = {
  genre: string,
  films: Films
}

const initState: InitState = {
  genre: 'All genres',
  films: []
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
    });
});

export {reducer};

