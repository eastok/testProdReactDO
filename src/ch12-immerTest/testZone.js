// immer 모듈 가져오기
import produce from "immer";
const array = {
  class: {
    deep404: {
      inside: 3,
      sampleArray: [2, 3, 4],
    },
    middle: 2,
  },
  end: 5,
};
// 기본 문법 살펴보기.
const nextState = produce(array, (draft) => {
  // 변경하고 싶은 값 변경하기.
  draft.class.deep404.inside = 30000;
});
console.log("불변성 유지 하면서 업데이트하기");
console.log("nextState.class.deep404.inside 의 값 : ");
console.log(nextState.class.deep404.inside);
