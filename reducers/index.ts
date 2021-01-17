import { combineReducers } from 'redux';
import { postsReducer } from './posts';
import { postDetailsReducer } from './postDetails';
import { PostDetails, Post } from '../actions';

export interface StoreState {
  posts: Post[];
  postDetails: PostDetails;
}

export const reducers = combineReducers<StoreState>({
  posts: postsReducer,
  postDetails: postDetailsReducer,
});
