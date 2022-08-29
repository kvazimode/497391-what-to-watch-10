import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { AuthStatus, Route } from '../const';
import { Login } from '../types/login';
import { User } from '../types/user';
import { loadFilms, setIsDataLoaded, setGenres, setAuthStatus } from './action';
import { Films } from '../types/film';
import { getGenres } from '../tools';
import { dropToken, saveToken } from '../services/token';

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'list/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(Route.Films);
    dispatch(setGenres(getGenres(data)));
    dispatch(loadFilms(data));
    dispatch(setIsDataLoaded(true));
  }
);

export const login = createAsyncThunk<void, Login, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<User>(Route.Login, {email, password});
    saveToken(token);
    dispatch(setAuthStatus(AuthStatus.Auth));
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
      await api.get(Route.Login);
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
    await api.delete(Route.Logout);
    dropToken();
    dispatch(setAuthStatus(AuthStatus.NoAuth));
  }
);
