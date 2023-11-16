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
const PublicItem2 = ({ article }) => {
  //  선택할 요소: 1)MAIN_TITLE 2)MAIN_IMG_THUMB 3)TRFC_INFO 4)ITEMCNTNTS
  const { MAIN_TITLE, MAIN_IMG_THUMB, TRFC_INFO, ITEMCNTNTS } = article;
  return (
    <PublicItemCss>
      {MAIN_IMG_THUMB && (
        <div className="thumbnail">
          <img src={MAIN_IMG_THUMB} alt="thumbnail" />
        </div>
      )}
      <div className="contents">
        <h2>{MAIN_TITLE}</h2>
        <p>교통정보 : {TRFC_INFO}</p>
        <p>설명 : {ITEMCNTNTS}</p>
      </div>
    </PublicItemCss>
  );
};
export default PublicItem2;
