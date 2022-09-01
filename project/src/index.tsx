import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {playerMock} from './mocks/player';
import {store} from './store';
import { checkAuth, fetchFilms } from './store/api-actions';

store.dispatch(checkAuth());
store.dispatch(fetchFilms());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        playerMock={playerMock}
      />
    </Provider>
  </React.StrictMode>,
);
