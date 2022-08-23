import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import films from './mocks/films';
import {playerMock} from './mocks/player';
import {reviewMock} from './mocks/review';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  promoId: 1
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promoId={Setting.promoId}
        films={films}
        playerMock={playerMock}
        reviewMock={reviewMock}
      />
    </Provider>
  </React.StrictMode>,
);
