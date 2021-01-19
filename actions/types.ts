import { FetchPostsAction, FetchPostDetailsAction } from './posts';

export enum ActionTypes {
  fetchPostsStarted,
  fetchPostsSucceeded,
  fetchPostsFailed,
  fetchPostDetailsStarted,
  fetchPostDetailsSucceeded,
  fetchPostDetailsFailed,
  createPostStarted,
  createPostSucceeded,
  createPostFailed,
  createCommentStarted,
  createCommentSucceeded,
  createCommentFailed,
}

export type Action = FetchPostsAction | FetchPostDetailsAction;
