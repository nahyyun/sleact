import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '@layouts/App';
import { AuthContextProvider } from '@contexts/AuthContext';
import { OnlineMemeberContextProvider } from '@contexts/OnlineMemberContext';

render(
  <AuthContextProvider>
    <OnlineMemeberContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OnlineMemeberContextProvider>
  </AuthContextProvider>,
  document.querySelector('#app'),
);
