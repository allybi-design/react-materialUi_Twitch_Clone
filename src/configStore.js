import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {combineReducers, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger';

//Store Reducers
import counterReducers from "store/counter/reducers";
import authReducers from "store/auth/reducers"
import { reducer as formReducers } from 'redux-form'

const logger = createLogger({
  collapsed: true
});

const rootReducers  = combineReducers({
  count:counterReducers,
  auth: authReducers,
  form: formReducers,
});

const store = createStore(rootReducers, undefined, composeWithDevTools(applyMiddleware(thunk, logger)))

export default store