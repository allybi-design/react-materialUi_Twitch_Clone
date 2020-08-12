import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
// import { combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./store/reducers";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";

import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

import App from "./App";

const history = createBrowserHistory();

//If more than one Reducer file is imported they musg to combined ->
// const Reducers = combineReducers({counterReducer,})


const store = createStore(
  counterReducer,
  composeWithDevTools()
);
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
