import React from 'react';

export default function Article(props) {
  const articleClassnames = "article " + (props.active ? "active " : "") + props.color;
  return (
    <div className={articleClassnames}>
      <div className="article-title">
        <h2>{props.title}</h2>
      </div>
      <div className="article-content">
        {props.content}
      </div>
      <button className={"article-btn " + props.color} onClick={() => props.onBtnClick(props.id, props.color)} >Set color.
      </button>
    </div>
  );
}
