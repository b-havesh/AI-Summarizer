import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./services/store";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-1t0dz1nm6g4nt711.us.auth0.com"
    clientId="rYWI9A2aIuVwub0DwPs0SdFYLCDKGj8O"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
