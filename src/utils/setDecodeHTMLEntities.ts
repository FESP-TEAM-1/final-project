// 입력: "Hello &amp; welcome to the world of &lt;coding&gt;!";
// 출력: "Hello & welcome to the world of <coding>!";

const decodeHTMLEntities = (str: string) => {
  const stringIsNotEmpty = str !== undefined && str !== null && str !== "";
  if (stringIsNotEmpty) {
    const element = document.createElement("div");
    element.innerHTML = str;
    let decodeStr = element.textContent;

    return decodeStr;
  }
};

export default decodeHTMLEntities;
