import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

import Keycloak from 'keycloak-js'
//import { findAllInRenderedTree } from 'react-dom/test-utils';

let initOptions = {
  realm: "encourageat", // realm as configured in Keycloak
  url: "http://localhost:8080", // URL of the Keycloak server
  clientId: "reactjs-client", // client id as configured in the realm in Keycloak
  onLoad: 'login-required',
  KeycloakResponseType: 'code',
  pkce: true, 
  pkceMethod: 'S256'
};

const keycloak = new Keycloak(initOptions);

let authenticated = false;
let username="";
let status = "";

keycloak.init({ onLoad:  initOptions.onLoad,
                KeycloakResponseType: 'code',
                pkceMethod: 'S256'}).success((result) => {
  if (result) {
      authenticated = true;
      username =  keycloak.tokenParsed.preferred_username;
      console.log("Welcome " + username);
      // keycloak.token gives access token
  } else {
      console.log("User authentication failed!");
      status = "Authentication failed!";
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    {authenticated ? <App username={username}/> : <h2>{status}</h2>}
  </React.StrictMode>
);
}).error(() => {
  console.log("Could not authenticate the user due to error!");
});
