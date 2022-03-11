import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
  );
};

export default App;
