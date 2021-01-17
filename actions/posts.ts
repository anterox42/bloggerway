import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import blogs from '../api/blogs';

export interface Post {
  id: string;
  title: string;
  body: string;
}

export interface PostDetails {
  id: string;
  title: string;
  body: string;
  comments: { id: string; postId: string; body: string }[];
}

export interface FetchPostsAction {
  type: ActionTypes.fetchPosts;
  payload: Post[];
}

export interface FetchPostDetailsAction {
  type: ActionTypes.fetchPostDetails;
  payload: PostDetails;
}

export const fetchPosts = () => {
  return async (dispatch: Dispatch) => {
    const response = await blogs.get<Post[]>('/posts');

    dispatch<FetchPostsAction>({
      type: ActionTypes.fetchPosts,
      payload: response.data,
    });
  };
};

export const fetchPostDetails = (id: string | string[]) => {
  return async (dispatch: Dispatch) => {
    const response = await blogs.get<PostDetails>(
      `posts/${id}?_embed=comments`
    );

    dispatch<FetchPostDetailsAction>({
      type: ActionTypes.fetchPostDetails,
      payload: response.data,
    });
  };
};
