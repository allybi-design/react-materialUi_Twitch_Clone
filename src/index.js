import React from "react";
import { render } from "react-dom";

//Store Imports
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import {combineReducers, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger';

//Store Reducers
import counterReducer from "store/counter/reducers";
import authReducers from "store/auth/reducers"

//Theme Imports
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

//Router Imports
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

import App from "./App";

const history = createBrowserHistory();

const logger = createLogger({
  collapsed: true
});

const rootReducers  = combineReducers({
  Count:counterReducer,
  Auth: authReducers
});

const store = createStore(rootReducers, undefined, composeWithDevTools(applyMiddleware(thunk, logger)))

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
