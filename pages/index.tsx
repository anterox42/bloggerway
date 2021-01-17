//import Link from 'next/link';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { StoreState } from '../reducers';
import { Post } from '../actions';
import Link from 'next/link';
import { PostCard } from '../components/PostCard';

interface IndexPageProps {
  fetchPosts: Function;
  posts: Post[];
}

const IndexPage: React.FC<IndexPageProps> = (props: IndexPageProps) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  //
  const renderPreview = (text: string) => {
    if (text.length < 200) {
      return text;
    } else {
      return text.slice(0, 200) + '... Read more';
    }
  };

  const renderPosts = () => {
    if (props.posts) {
      
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

      const sortedPosts = [...props.posts].sort(compare);

      return sortedPosts.map((post: Post) => {
        return (
          <PostCard key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>
                <h2 style={{ color: 'orange' }}>{post.title.toUpperCase()}</h2>
              </a>
            </Link>
            <p>{renderPreview(post.body)}</p>
          </PostCard>
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  };

  return (
    <Layout title="Latest posts">
      <h1>Latest Posts</h1>
      {renderPosts()}
    </Layout>
  );
};

const mapStateToProps = ({ posts }: StoreState) => {
  return { posts };
};

export default connect(mapStateToProps, { fetchPosts })(IndexPage);
