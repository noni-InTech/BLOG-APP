import React from 'react';
import { Link } from 'react-router-dom';
import post1 from '../posts/post1.json';
import post2 from '../posts/post2.json';

const posts = [post1, post2];

const HomePage = () => {
  return (

    <div className="container">
      <h1>📝 My Blog</h1>
      {posts.map(post => (
        <div key={post.slug} className="post-card">
  <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: '8px' }} />
  <div className="post-title">{post.title}</div>
  <Link to={`/post/${post.slug}`}>Read more →</Link>
</div>

      ))}
    </div>
  );
};

export default HomePage;
