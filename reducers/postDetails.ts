import { Action, ActionTypes, PostDetails } from '../actions';

export const postDetailsReducer = (
  state: PostDetails = {} as PostDetails,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.fetchPostDetails:
      return action.payload;
    default:
      return state;
  }
};
