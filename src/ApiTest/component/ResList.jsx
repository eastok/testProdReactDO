import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ResItem from "../model/ResItem";

const ResListCss = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ResList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const resultData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=x%2B4Ud1wUccWuBm5DEVb0aQ1F66AK%2BmURYunSfPhQOXTctQmTz0tq0pGeIp95V6MNMjPPNbqihRClo0Ifqgx99A%3D%3D&pageNo=1&numOfRows=400&resultType=json"
        );
        setArticles(response.data.getFoodKr.item);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    resultData();
  }, []);
  if (loading) {
    return <ResListCss>데이터 받는중(대기중 ....)</ResListCss>;
  }

  // 데이터를 못받아 왔을 경우, 화면에 아무것도 안그리기.
  if (!articles) {
    return <ResListCss>데이터 음따</ResListCss>;
  }

  // 로딩도 끝나고, 받아온 데이터가 존재 한다면, 그때 그리기.

  return (
    <ResListCss>
      {articles.map((article) => (
        <ResItem key={article.url} article={article} />
      ))}
    </ResListCss>
  );
};

export default ResList;
