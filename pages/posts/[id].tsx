import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
//import Link from 'next/link';
import Layout from '../../components/Layout';
import { fetchPostDetails } from '../../actions';
import { connect } from 'react-redux';
import { PostDetails } from '../../actions';
import { StoreState } from '../../reducers';
import { PostCard } from '../../components/PostCard';
import { Button } from '../../components/Button';
import blogs from '../../api/blogs';

interface PostProps {
  fetchPostDetails: Function;
  postDetails: PostDetails;
  newComment: string;
}

const Post: React.FC<PostProps> = (props: PostProps) => {
  const [newComment, setNewComment] = useState('');
  const router = useRouter();

  // seems to be async, so better to add a condition to useEffect
  const id: any = router.query.id;

  useEffect(() => {
    if (id) {
      props.fetchPostDetails(id);
    }
  }, [id, props.fetchPostDetails]);

  const renderComments = () => {
    if (props.postDetails.comments) {
      return props.postDetails.comments.map((comment: any) => {
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

  if (props.postDetails.title) {
    return (
      <>
        <Layout title={props.postDetails.title}>
          <PostCard>
            <h2 style={{ color: 'orange' }}>
              {props.postDetails.title.toUpperCase()}
            </h2>
            <p>{props.postDetails.body}</p>
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
                blogs.post('/comments', commentContent).then(() => {
                  props.fetchPostDetails(id).then(setNewComment(''));
                });
              }}
            >
              Add
            </Button>
          </PostCard>
        </Layout>
      </>
    );
  } else {
    return <div />;
  }
};

const mapStateToProps = ({ postDetails }: StoreState) => {
  return { postDetails };
};

export default connect(mapStateToProps, {
  fetchPostDetails,
})(Post);
