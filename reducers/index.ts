import { combineReducers } from 'redux';
import { postsReducer } from './posts';
import { createPostReducer } from './createPost';
import { postDetailsReducer } from './postDetails';
import { createCommentReducer } from './createComment';
import { Post } from '../actions';

export interface StoreState {
  posts: Post[];
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
