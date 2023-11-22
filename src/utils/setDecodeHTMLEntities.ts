const decodeHTMLEntities = (str: string) => {
  if (str !== undefined && str !== null && str !== "") {
    const element = document.createElement("div");
    element.innerHTML = str;
    let decodeStr = element.textContent;
    element.textContent = "";

    return decodeStr;
  }
};

export default decodeHTMLEntities;
