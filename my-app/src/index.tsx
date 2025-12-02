import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // <-- Redux Provider
import { App } from './App';
import { Store } from './store/appStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

reportWebVitals();