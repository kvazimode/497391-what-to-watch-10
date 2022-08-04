import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import films from './mocks/films';

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
    />
  </React.StrictMode>,
);
