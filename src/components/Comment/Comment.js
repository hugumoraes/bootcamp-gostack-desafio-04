import React from 'react';

import './Comment.css';

function Comment({ data }) {
  return (
    <div className="comment-data">
      <img className="img" />
      <div className="comment-content">
        <p><span className="bold">{data.author.name}</span> {data.content}</p>
      </div>
    </div>
  );
}

export default Comment;