import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //middleware
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'; //extension to work
import rootReducer from './reducers';   //update state from store
const middleware= [thunk];
const initialState= {};
const store= createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;

