import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));
// registerServiceWorker();
