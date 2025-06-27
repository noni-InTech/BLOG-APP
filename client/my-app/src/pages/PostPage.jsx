import React from 'react';
import { useParams, Link } from 'react-router-dom';
import post1 from '../posts/post1.json';
import post2 from '../posts/post2.json';

const posts = {
  'first-post': post1,
  'second-post': post2
};

const PostPage = () => {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) return <div className="container"><h2>Post not found</h2></div>;

  return (
    <div className="container">
      <Link to="/">← Back to Home</Link>
      <h1>{post.title}</h1>
<img src={post.image} alt={post.title} style={{ width: '100%', marginTop: '1rem', borderRadius: '8px' }} />
<p style={{ lineHeight: '1.8', marginTop: '1rem' }}>{post.content}</p>

    </div>
  );
};

export default PostPage;
