import { useEffect } from 'react';
import Layout from '../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../actions';
import { StoreState } from '../reducers';
import { Post } from '../actions';
import Link from 'next/link';
import { PostCard } from '../components/PostCard';

const IndexPage: React.FC = () => {
  const posts: Post[] = useSelector((state: StoreState) => state.posts.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const renderPreview = (post: Post) => {
    if (post.body.length < 200) {
      return post.body;
    } else {
      return (
        <>
          {post.body.slice(0, 200)}
          {'... '}
          <Link href={`/posts/${post.id}`}>
            <span
              style={{
                color: '#ffb38a',
                cursor: 'pointer',
              }}
            >
              Read more
            </span>
          </Link>
        </>
      );
    }
  };

  const renderPosts = () => {
    if (posts) {
      const compare = (a: any, b: any) => {
        const postA = Number(a.id);
        const postB = Number(b.id);

        let comparison = 0;
        if (postA < postB) {
          comparison = 1;
        } else if (postA > postB) {
          comparison = -1;
        }
        return comparison;
      };

      const sortedPosts = [...posts].sort(compare);

      return sortedPosts.map((post: Post) => {
        return (
          <PostCard key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>
                <h2 style={{ color: 'orange' }}>{post.title.toUpperCase()}</h2>
              </a>
            </Link>
            <p>{renderPreview(post)}</p>
          </PostCard>
        );
      });
    } else {
      return <div></div>;
    }
  };

  return (
    <Layout title="Latest posts">
      <h1>Latest Posts</h1>
      {renderPosts()}
    </Layout>
  );
};

export default IndexPage;
