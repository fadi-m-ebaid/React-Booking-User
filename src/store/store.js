import { legacy_createStore as createStore } from 'redux';
import combineReducers from './reducers/combine';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import heartToggleReducer from './reduce/toggleReduce';
const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
