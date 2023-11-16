import React from "react";
import styled from "styled-components";
const NewsItemCss = styled.div`
  display: flex;

  .thumbnail {
    margin-left: 1rem;
    img {
      display: block;
      width: 170px;
      height: 130px;
      object-fit: cover;
    }
  }

  .contents {
    margin-left: 20px;
    h2 {
      a {
        color: blue;
      }
    }

    p {
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemCss>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopenr noreferrer" />
          <img src={urlToImage} alt="thumbnail" />
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopenr noreferrer" />
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemCss>
  );
};

export default NewsItem;
