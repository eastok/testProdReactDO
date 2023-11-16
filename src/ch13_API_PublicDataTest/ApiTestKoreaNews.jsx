import { Button } from "antd";
import axios from "axios";
import React, { useState } from "react";
// //한국 뉴스
// 카테고리 : 샘플
// business ,entertainment, health, science, technology
// https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=87af28a1123a4fcc9c869c0b81bd243c

// 모델 구조 :
// 키 : articles  , 값 : [{기사객체},{기사객체},{기사객체},...]
// 가지고 올 데이터 :
// 1) title 2) description 3) url 4) urlToImage

const ApiTestKoreaNews = () => {
  // REST API 서버에서, 임시로 받아온 data , state 로 확인하기.
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      // await 는 Promise 를 반환하는 함수 앞에 사용
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=87af28a1123a4fcc9c869c0b81bd243c"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Button type="primary" onClick={onClick}>
        가져오기
      </Button>
      <div>
        {data && (
          <textarea
            rows={8}
            // stringify 함수의 출력할 data
            // 2번째 인자, 모양인데, null 이면 문자열 의미
            // 3번째 인자 2, 들여 쓰기
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default ApiTestKoreaNews;
