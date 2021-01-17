import { FetchPostsAction, FetchPostDetailsAction } from './posts';

export enum ActionTypes {
  fetchPosts,
  fetchPostDetails,
}

export type Action = FetchPostsAction | FetchPostDetailsAction;
