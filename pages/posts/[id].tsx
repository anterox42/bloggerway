import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
//import Link from 'next/link';
import Layout from '../../components/Layout';
import { fetchPostDetails, createComment } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { PostDetails } from '../../actions';
import { StoreState } from '../../reducers';
import { PostCard } from '../../components/PostCard';
import { Button } from '../../components/Button';

const Post: React.FC = () => {
  const [newComment, setNewComment] = useState('');

  const postDetails: PostDetails = useSelector(
    (state: StoreState) => state.postDetails.data
  );

  const router = useRouter();

  // seems to be async, so better to add a condition to useEffect
  const id: any = router.query.id;

  const dispatch = useDispatch();

  // Reload page when comment created
  const commentCreatedStatus: any = useSelector(
    (state: StoreState) => state.createComment
  );

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchPostDetails(id));
    }
  }, [id, commentCreatedStatus]);

  const renderComments = () => {
    if (postDetails) {
      return postDetails.comments.map((comment: any) => {
        return (
          <PostCard key={comment.id}>
            <p>{comment.body}</p>
          </PostCard>
        );
      });
    } else {
      return <div>No comments yet... be the first</div>;
    }
  };

  const commentContent: { postId: number; body: string } = {
    postId: parseInt(id, 10),
    body: newComment,
  };

  const renderBody = () => {
    if (postDetails) {
      return (
        <>
          <PostCard>
            <h2 style={{ color: 'orange' }}>
              {postDetails.title.toUpperCase()}
            </h2>
            <p>{postDetails.body}</p>
          </PostCard>
          <h3>Comments:</h3>
          {renderComments()}
          <PostCard>
            <label>New comment:</label>
            <br />
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              style={{
                border: '0',
                padding: '1rem',
                width: '15rem',
                fontFamily: 'inherit',
              }}
            />
            <Button
              onClick={() => {
                dispatch(createComment(commentContent));
                setNewComment('');
              }}
            >
              Add
            </Button>
          </PostCard>
        </>
      );
    }
  };

  return (
    <>
      <Layout title={postDetails ? postDetails.title : ''}>
        {renderBody()}
      </Layout>
    </>
  );
};

export default Post;
