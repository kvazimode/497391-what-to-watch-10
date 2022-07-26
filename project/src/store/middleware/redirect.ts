import browserHistory from '../../browser-history';
import { Middleware } from 'redux';
import { reducer } from '../reducer';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown | Reducer> = (store) => (next) => (action) => {
  if (action.type === 'redirect') {
    browserHistory.push(action.payload);
  }
  return next(action);
};
