import React from "react";
import "./css/NewsItem.css";
function NewsItem({ title, urlToImage, url }) {
  return (
    <div className="NewsItem">
      <a href={url} target="_blank">
        <img src={urlToImage} />
        <h1>{title}</h1>
      </a>
    </div>
  );
}

export default NewsItem;
