import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { AuthStatus, ApiRoute, AppRoute } from '../const';
import { Login } from '../types/login';
import { User } from '../types/user';
import { Films, Film } from '../types/film';
import { cropList, getGenres } from '../tools';
import { dropToken, saveToken } from '../services/token';
import { Reviews } from '../types/review';
import { ReviewPost } from '../types/review-post';
import * as action from './action';
import { FavPost } from '../types/fav-post';

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'list/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(ApiRoute.Films);
    dispatch(action.setGenres(getGenres(data)));
    dispatch(action.loadFilms(data));
    dispatch(action.setIsDataLoaded(true));
  }
);

export const fetchFilm = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'list/fetchFilm',
  async (id, {dispatch, extra: api}) => {
    dispatch(action.setIsFilmLoaded(false));
    try {
      const {data} = await api.get<Film>(`${ApiRoute.Films}/${id}`);
      dispatch(action.loadFilm(data));
      dispatch(action.setIsFilmLoaded(true));
    } catch {
      dispatch(action.redirect(AppRoute.NotFound));
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
    dispatch(action.loadSimilar(cropList(data, 4)));
  }
);

export const fetchReviews = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'list/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(`comments/${id}`);
    dispatch(action.loadReviews(data));
  }
);

export const fetchPromo = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'list/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(ApiRoute.Promo);
    dispatch(action.loadPromo(data));
    dispatch(action.setIsPromoLoaded(true));
  }
);

export const login = createAsyncThunk<void, Login, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<User>(ApiRoute.Login, {email, password});
      saveToken(token);
      dispatch(action.setAuthStatus(AuthStatus.Auth));
      dispatch(action.redirect(AppRoute.Main));
    } catch {
      dispatch(action.setAuthStatus(AuthStatus.NoAuth));
      dispatch(action.redirect(AppRoute.SignIn));
    }
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
      dispatch(action.setAuthStatus(AuthStatus.Auth));
    } catch {
      dispatch(action.setAuthStatus(AuthStatus.NoAuth));
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
    dispatch(action.setAuthStatus(AuthStatus.NoAuth));
    dispatch(action.redirect(AppRoute.Main));
  }
);

export const postReview = createAsyncThunk<void, ReviewPost, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'postReview',
  async({filmId, comment, rating}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Reviews>(`/comments/${filmId}`, {comment, rating});
      dispatch(action.setIsReviewPosted(true));
      dispatch(action.loadReviews(data));
      dispatch(action.redirect(AppRoute.Film));
    } catch {
      dispatch(action.setIsReviewPosted(false));
    }
  }
);

export const addToFav = createAsyncThunk<void, FavPost, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'addToFavorite',
  async({filmId, isFav, type}, {dispatch, extra: api}) => {
    const {data} = await api.post<Film>(`/favorite/${filmId}/${isFav}`, {filmId, isFav});
    if (type === 'promo') {
      dispatch(action.loadPromo(data));
      return;
    }
    dispatch(action.loadFilm(data));
  }
);
