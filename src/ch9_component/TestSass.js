// 방금 만든 css 문법을 테스트 할 빈 도화지.

// CSS Module 테스트 해보기
// 만든 CSSModule.module 불러오기
import cssmodule from "./CSSModule.module.css";

import React from "react";
import "./SassComponent.scss";

const TestSass = () => {
  return (
    <>
      {/* CSS Module 테스트해보기. 적용하기 */}
      <div className={cssmodule.wrapper}>CSS Module 테스트해보기</div>
      <div className="testGlobal">CSS Module 테스트해보기2</div>
      <div className={`${cssmodule.wrapper} ${cssmodule.wrapper2}`}>
        CSS Module 테스트해보기 2개 클래스 적용해보기.
      </div>
      <div className="SassTest">
        <div className="box red"></div>
        <div className="box blue"></div>
        <div className="box purple"></div>
      </div>
    </>
  );
};

export default TestSass;
