import { useState } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions';
import { PostCard } from '../../components/PostCard';
import { Button } from '../../components/Button';
import { InputArea } from '../../components/InputArea';
import { PostContent } from '../../actions/posts';
import { StoreState } from '../../reducers';

const New: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const postCreatedStatus: any = useSelector(
    (state: StoreState) => state.createPost
  );

  const postContent: PostContent = {
    title: title,
    body: body,
  };

  const renderPostCreation = () => {
    if (postCreatedStatus.loaded) {
      return <h1>Success! That's enough posts for today</h1>;
    } else if (postCreatedStatus.error) {
      return <h1>Fail. Probably, you shouldn't try anymore</h1>;
    } else if (postCreatedStatus.isLoading) {
      return <h1>Sending...</h1>;
    }
    return (
      <form>
        <h1>Create new post</h1>
        <InputArea>
          <label>Title:</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              border: '0',
              padding: '1rem',
              width: '15rem',
            }}
          ></input>
        </InputArea>
        <InputArea>
          <label>Text:</label>
          <br />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={{
              border: '0',
              padding: '1rem',
              width: '15rem',
              fontFamily: 'inherit',
            }}
          />
        </InputArea>
        <Button
          onClick={() => {
            dispatch(createPost(postContent));
          }}
        >
          Save
        </Button>
      </form>
    );
  };

  if (postCreatedStatus.loaded) {
  }

  const dispatch = useDispatch();

  return (
    <Layout title="Create new post">
      <PostCard>{renderPostCreation()}</PostCard>
    </Layout>
  );
};

export default New;
