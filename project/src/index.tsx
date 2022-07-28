import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const mock = {
  cardCount: 20,
};

root.render(
  <React.StrictMode>
    <App cardCount={mock.cardCount}/>
  </React.StrictMode>,
);
