import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Route } from '../const';
import { loadFilms, setIsDataLoaded, setGenres } from './action';
import { Films } from '../types/film';
import { getGenres } from '../tools';

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
