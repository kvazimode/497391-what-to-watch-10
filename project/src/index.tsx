import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import films from './mocks/films';
import {playerMock} from './mocks/player';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  promoId: 1
};

root.render(
  <React.StrictMode>
    <App
      promoId={Setting.promoId}
      films={films}
      playerMock={playerMock}
    />
  </React.StrictMode>,
);
