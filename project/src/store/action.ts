import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthStatus } from '../const';
import { Films, Film } from '../types/film';
import { Reviews } from '../types/review';

export const changeGenre = createAction<{genre: string}>('list/changeGenre');
export const showAll = createAction('list/showAll');
export const loadFilms = createAction<Films>('list/loadFilms');
export const setIsDataLoaded = createAction<boolean>('list/setIsDataLoaded');
export const setGenres = createAction<string[]>('list/setGenres');
export const setAuthStatus = createAction<AuthStatus>('setAuthStatus');
export const loadFilm = createAction<Film>('list/loadFilm');
export const loadSimilar = createAction<Films>('list/loadSimilar');
export const redirect = createAction<AppRoute>('redirect');
export const setIsFilmLoaded = createAction<boolean>('list/setIsFilmLoaded');
export const loadReviews = createAction<Reviews>('list/loadReviews');
export const setIsReviewPosted = createAction<boolean>('setIsReviewPosted');
export const loadPromo = createAction<Film>('list/getPromo');
export const setIsPromoLoaded = createAction<boolean>('list/setIsPromoLoaded');
