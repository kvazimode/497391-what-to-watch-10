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
      state.films = filterFilms(genre);
    })
    .addCase(showAll, (state) => {
      state = initState;
    });
});

export {reducer};

