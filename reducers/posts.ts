import { Action, ActionTypes, Post } from '../actions';

export const postsReducer = (state: Post[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchPosts:
      return action.payload;
    default:
      return state;
  }
};
