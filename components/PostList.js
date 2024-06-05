import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;