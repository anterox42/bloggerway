import { ActionTypes } from '../actions';

export const createCommentReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case ActionTypes.createCommentStarted:
      return { isLoading: true, loaded: false, data: null, error: null };
    case ActionTypes.createCommentSucceeded:
      return { isLoading: false, loaded: true, data: action.data, error: null };
    case ActionTypes.createCommentFailed:
      return { isLoading: false, loaded: true, data: null, error: action.data };
    default:
      return state;
  }
};