import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
  posts: posts,
  comments: comments,
  routing: routerReducer
});

export default rootReducer;
