import React from "react";
import styled from "styled-components";
const PublicItemCss = styled.div`
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
const PublicItem = ({ article }) => {
  //  선택할 요소: 1)MAIN_TITLE, 2)CNTCT_TEL 3)MAIN_IMG_THUMB 4)ADDR1
  const { MAIN_TITLE, CNTCT_TEL, MAIN_IMG_THUMB, ADDR1 } = article;
  return (
    <PublicItemCss>
      {MAIN_IMG_THUMB && (
        <div className="thumbnail">
          <img src={MAIN_IMG_THUMB} alt="thumbnail" />
        </div>
      )}
      <div className="contents">
        <h2>{MAIN_TITLE}</h2>
        <p>주소 : {ADDR1}</p>
        <p>연락처 : {CNTCT_TEL}</p>
      </div>
    </PublicItemCss>
  );
};
export default PublicItem;
