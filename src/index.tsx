import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Auth0Provider } from "@auth0/auth0-react";

import config from "./config";
import Routes from "./routes";
import history from "./util/history";
import "./index.css";

const router = createBrowserRouter(Routes);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Auth0Provider
    domain={config.domain}
    clientId={config.clientId}
    useRefreshTokens
    cacheLocation="localstorage"
    authorizationParams={{
      redirect_uri: `${window.location.origin}`,
    }}
    onRedirectCallback={(appState) => {
      history.push(
        appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname
      );
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
