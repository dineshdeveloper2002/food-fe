import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // <-- Redux Provider
import { App } from './App';
import { Store } from './store/AppStore';
import { ModuleRegistry } from 'ag-grid-community';
import { AllCommunityModule } from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

ModuleRegistry.registerModules([AllCommunityModule]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

reportWebVitals();