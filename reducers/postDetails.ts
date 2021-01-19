import { ActionTypes } from '../actions';

export const postDetailsReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case ActionTypes.fetchPostDetailsStarted:
      return { isLoading: true, loaded: false, error: null };
    case ActionTypes.fetchPostDetailsSucceeded:
      return {
        isLoading: false,
        loaded: true,
        data: action.payload,
        error: null,
      };
    case ActionTypes.fetchPostDetailsFailed:
      return { isLoading: false, loaded: true, error: action.data };
    default:
      return state;
  }
};
