// review
// 복잡한 코드나 자주 사용하지 않는 경우에는 이런 복잡한 예시를 설명하는 주석을 달아주는 게 좋습니다.
// 입력: "Hello &amp; welcome to the world of &lt;coding&gt;!";
// 출력: "Hello & welcome to the world of <coding>!";
const decodeHTMLEntities = (str: string) => {
  // review
  const stringIsNotEmpty !== undefined && str !== null && str !== ""
  if (stringIsNotEmpty) {
    const element = document.createElement("div");
    element.innerHTML = str;
    let decodeStr = element.textContent;
    element.textContent = ""; // 텍스트콘텐트를 초기화하는 이 코드는 왜 있는 걸까요?
    return decodeStr;
  }
};

export default decodeHTMLEntities;
