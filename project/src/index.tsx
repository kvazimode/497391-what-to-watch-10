import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import {store} from './store';
import { checkAuth, fetchFilms, fetchPromo, fetchFavList } from './store/api-actions';

store.dispatch(checkAuth());
store.dispatch(fetchFilms());
store.dispatch(fetchPromo());
store.dispatch(fetchFavList());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
);
