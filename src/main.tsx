import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import store from './data/store.ts';
import { StoreProvider } from 'easy-peasy';


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  // </React.StrictMode>
);
