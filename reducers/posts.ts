import { ActionTypes } from '../actions';

export const postsReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case ActionTypes.fetchPostsStarted:
      return { isLoading: true, loaded: false, error: null };
    case ActionTypes.fetchPostsSucceeded:
      return {
        isLoading: false,
        loaded: true,
        data: action.payload,
        error: null,
      };
    case ActionTypes.fetchPostsFailed:
      return { isLoading: false, loaded: true, error: action.data };
    default:
      return state;
  }
};
