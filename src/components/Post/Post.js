import React from 'react';

import Comment from '../Comment/Comment';

import './Post.css';

function Post({ data }) {
  return (
    <div className="post">

      <div className="user">
        <img className="img" />
        <div className="userdata">
          <h1>{data.author.name}</h1>
          <span className="date">{data.date}</span>
        </div>
      </div>

      <div className="content">
        <p>{data.content}</p>
      </div>

      <hr />

      <div className="comment">
        {data.comments.map(comment => {
          return <Comment data={comment} key={comment.id} />
        })}
      </div>

    </div>
  );
}

export default Post;