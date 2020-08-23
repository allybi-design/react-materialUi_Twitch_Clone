import React from "react";
import { render } from "react-dom";

//Store Imports
import { Provider } from "react-redux";
import store from "./configStore"

//Theme Imports
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

//Router Imports

import history from "./history";
import { Router } from "react-router-dom";

import App from "./App";


const renderApp = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
);

const root = document.getElementById("root");

render(renderApp(), root);
