import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, showAll } from './action';
import films from '../mocks/films';
import { filterFilms } from '../tools';

const initState = {
  genre: 'All genres',
  films: films
};

const reducer = createReducer(initState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
      state.films = filterFilms(genre, films);
    })
    .addCase(showAll, (state) => {
      state.genre = initState.genre;
      state.films = initState.films;
    });
});

export {reducer};

