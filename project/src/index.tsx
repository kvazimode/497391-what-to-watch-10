import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const mock = {
  cardCount: 20,
  promoTitle: 'The Grand Budapest Hotel',
  promoGenre: 'Drama',
  promoRelease: 2014
};

root.render(
  <React.StrictMode>
    <App
      promoTitle={mock.promoTitle}
      promoGenre={mock.promoGenre}
      promoRelease={mock.promoRelease}
      cardCount={mock.cardCount}
    />
  </React.StrictMode>,
);
