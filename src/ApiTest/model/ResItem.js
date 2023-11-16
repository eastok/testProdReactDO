import React from "react";
import styled from "styled-components";
const ResItemCss = styled.div`
  display: flex;
  .thumbnail {
    margin-left: 1rem;
    img {
      display: block;
      width: 250px;
      height: 220px;
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
const ResItem = ({ article }) => {
  //  선택할 요소: 1)MAIN_TITLE, 2)CNTCT_TEL 3)MAIN_IMG_THUMB 4)ADDR1
  const { MAIN_TITLE, RPRSNTV_MENU, MAIN_IMG_THUMB, ITEMCNTNTS } = article;
  return (
    <ResItemCss>
      {MAIN_IMG_THUMB && (
        <div className="thumbnail">
          <img src={MAIN_IMG_THUMB} alt="thumbnail" />
        </div>
      )}
      <div className="contents">
        <h2>{MAIN_TITLE}</h2>
        <p>대표메뉴 : {RPRSNTV_MENU}</p>
        <p>가게소개 : {ITEMCNTNTS}</p>
      </div>
    </ResItemCss>
  );
};
export default ResItem;
