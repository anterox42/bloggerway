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

export interface PostContent {
  title: string;
  body: string;
}

export interface FetchPostsAction {
  type:
    | ActionTypes.fetchPostsStarted
    | ActionTypes.fetchPostsSucceeded
    | ActionTypes.fetchPostsFailed;
  payload: Post[];
}

export interface FetchPostDetailsAction {
  type:
    | ActionTypes.fetchPostDetailsStarted
    | ActionTypes.fetchPostDetailsSucceeded
    | ActionTypes.fetchPostDetailsFailed;
  payload: PostDetails;
}

export const fetchPosts = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.fetchPostsStarted });

    await blogs.get<Post[]>('/posts').then(
      (response) =>
        dispatch({
          type: ActionTypes.fetchPostsSucceeded,

          // Someone uploaded to api posts without a title and a body which fires an error,
          // so I added filtering for "broken" api answers
          payload: response.data.filter((post) => post.title && post.body),
        }),
      (error) =>
        dispatch({ type: ActionTypes.fetchPostsFailed, payload: error })
    );
  };
};

export const fetchPostDetails = (id: string | string[]) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.fetchPostDetailsStarted });

    await blogs.get<PostDetails>(`posts/${id}?_embed=comments`).then(
      (response) =>
        dispatch({
          type: ActionTypes.fetchPostDetailsSucceeded,
          payload: response.data,
        }),
      (error) =>
        dispatch({ type: ActionTypes.fetchPostDetailsFailed, payload: error })
    );
  };
};

export const createPost = (postContent: PostContent) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.createPostStarted });

    await blogs.post('/posts', postContent).then(
      (response) =>
        dispatch({ type: ActionTypes.createPostSucceeded, payload: response }),
      (error) =>
        dispatch({ type: ActionTypes.createPostFailed, payload: error })
    );
  };
};

export const createComment = (commentContent: {
  body: string;
  postId: number;
}) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.createCommentStarted });

    await blogs.post('/comments', commentContent).then(
      (response) =>
        dispatch({
          type: ActionTypes.createCommentSucceeded,
          payload: response,
        }),
      (error) =>
        dispatch({ type: ActionTypes.createCommentFailed, payload: error })
    );
  };
};
