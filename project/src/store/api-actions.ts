import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { AuthStatus, ApiRoute, AppRoute } from '../const';
import { Login } from '../types/login';
import { User } from '../types/user';
import { loadFilms, setIsDataLoaded, setGenres, setAuthStatus, loadFilm, loadSimilar, redirect, setIsFilmLoaded } from './action';
import { Films, Film } from '../types/film';
import { getGenres } from '../tools';
import { dropToken, saveToken } from '../services/token';

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'list/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(ApiRoute.Films);
    dispatch(setGenres(getGenres(data)));
    dispatch(loadFilms(data));
    dispatch(setIsDataLoaded(true));
  }
);

export const fetchFilm = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'list/fetchFilm',
  async (id, {dispatch, extra: api}) => {
    dispatch(setIsFilmLoaded(false));
    try {
      const {data} = await api.get<Film>(`${ApiRoute.Films}/${id}`);
      dispatch(loadFilm(data));
      dispatch(setIsFilmLoaded(true));
    } catch {
      dispatch(redirect(AppRoute.NotFound));
    }
  }
);

export const fetchSimilar = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'list/fetchSimilar',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(`${ApiRoute.Films}/${id}/similar`);
    dispatch(loadSimilar(data));
  }
);

export const login = createAsyncThunk<void, Login, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<User>(ApiRoute.Login, {email, password});
    saveToken(token);
    dispatch(setAuthStatus(AuthStatus.Auth));
    dispatch(redirect(AppRoute.Main));
  }
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(setAuthStatus(AuthStatus.Auth));
    } catch {
      dispatch(setAuthStatus(AuthStatus.NoAuth));
    }
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(setAuthStatus(AuthStatus.NoAuth));
    dispatch(redirect(AppRoute.Main));
  }
);
