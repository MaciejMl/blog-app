import { combineReducers, createStore } from 'redux';
import initialState from './initialState';
import postsReducer from './postsRedux';
import categoryReducer from './categoryRedux';

const subreducers = {
  posts: postsReducer,
  categories: categoryReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
