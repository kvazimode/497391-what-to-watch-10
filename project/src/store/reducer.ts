import { createReducer } from '@reduxjs/toolkit';
import * as actions from './action';
import { filterFilms } from '../tools';
import { Films, Film } from '../types/film';
import { AuthStatus } from '../const';
import { Reviews } from '../types/review';

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
  reviews: Reviews,
  isReviewPosted: boolean,
  promoFilm: Film | Record<string, never>,
  isPromoLoaded: boolean,
  favList: Films;
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
  reviews: [],
  isReviewPosted: false,
  promoFilm: {},
  isPromoLoaded: false,
  favList: [],
};

const reducer = createReducer(initState, (builder) => {
  builder
    .addCase(actions.changeGenre, (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
      state.films = filterFilms(genre, loadedFilms);
    })
    .addCase(actions.showAll, (state) => {
      state.genre = initState.genre;
      state.films = loadedFilms;
    })
    .addCase(actions.loadFilms, (state, action) => {
      state.films = action.payload;
      loadedFilms = action.payload;
    })
    .addCase(actions.setIsDataLoaded, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(actions.setGenres, (state, action) => {
      state.genres = action.payload;
    })
    .addCase(actions.setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(actions.loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(actions.loadSimilar, (state, action) => {
      state.similar = action.payload;
    })
    .addCase(actions.setIsFilmLoaded, (state, action) => {
      state.isFilmLoaded = action.payload;
    })
    .addCase(actions.loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(actions.setIsReviewPosted, (state, action) => {
      state.isReviewPosted = action.payload;
    })
    .addCase(actions.loadPromo, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(actions.setIsPromoLoaded, (state, action) => {
      state.isPromoLoaded = action.payload;
    })
    .addCase(actions.loadFavList, (state, action) => {
      state.favList = action.payload;
    });
});

export {reducer};

