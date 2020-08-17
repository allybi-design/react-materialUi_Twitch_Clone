import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {combineReducers, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger';

//Store Reducers
import counterReducer from "store/counter/reducers";
import authReducers from "store/auth/reducers"

const logger = createLogger({
  collapsed: true
});

const rootReducers  = combineReducers({
  Count:counterReducer,
  Auth: authReducers
});

const store = createStore(rootReducers, undefined, composeWithDevTools(applyMiddleware(thunk, logger)))

export default store