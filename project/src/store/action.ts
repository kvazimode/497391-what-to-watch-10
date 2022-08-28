import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from '../const';
import { Films } from '../types/film';

export const changeGenre = createAction<{genre: string}>('list/changeGenre');
export const showAll = createAction('list/showAll');
export const loadFilms = createAction<Films>('list/loadFilms');
export const setIsDataLoaded = createAction<boolean>('list/setIsDataLoaded');
export const setGenres = createAction<string[]>('list/setGenres');
export const setAuthStatus = createAction<AuthStatus>('setAuthStatus');
