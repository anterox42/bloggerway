import { ActionTypes } from '../actions';

export const createPostReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case ActionTypes.createPostStarted:
      return { isLoading: true, loaded: false, data: null, error: null };
    case ActionTypes.createPostSucceeded:
      return {
        isLoading: false,
        loaded: true,
        data: action.response,
        error: null,
      };
    case ActionTypes.createPostFailed:
      return { isLoading: false, loaded: true, data: null, error: action.data };
    default:
      return state;
  }
};
