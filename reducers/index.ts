import { combineReducers } from 'redux';
import { postsReducer } from './posts';
import { createPostReducer } from './createPost';
import { postDetailsReducer } from './postDetails';
import { createCommentReducer } from './createComment';

export interface StoreState {
  posts: any;
  postDetails: any;
  createPost: any;
  createComment: any;
}

export const reducers = combineReducers<StoreState>({
  posts: postsReducer,
  postDetails: postDetailsReducer,
  createPost: createPostReducer,
  createComment: createCommentReducer,
});
