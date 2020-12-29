import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from '@emotion/react'
import GlobalStyles from './styles'
import defaultTheme from './themes/default'


ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN!}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
    redirectUri={window.location.origin}
  //audience={process.env.REACT_APP_AUTH0_AUDIENCE}
  //scope="read:current_user"
  >
    <ThemeProvider theme={defaultTheme}>
      <React.StrictMode>
        <App />
        <GlobalStyles />
      </React.StrictMode>
    </ThemeProvider>
  </Auth0Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
