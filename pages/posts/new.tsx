import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import { PostCard } from '../../components/PostCard';
import { Button } from '../../components/Button';
import { InputArea } from '../../components/InputArea';
import blogs from '../../api/blogs';

interface NewProps {
  fetchPosts: Function;
}

const New: React.FC<NewProps> = (props: NewProps) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const router = useRouter();

  const postContent: { title: string; body: string } = {
    title: title,
    body: body,
  };

  return (
    <Layout title="Create new post">
      <PostCard>
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
              blogs
                .post('/posts', postContent)
                .then(() => router.replace('/'))
                .then(() => props.fetchPosts());
            }}
          >
            Save
          </Button>
        </form>
      </PostCard>
    </Layout>
  );
};

export default connect(null, { fetchPosts })(New);
