import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
  
  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
  }

  .ellipsis-multi {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.5;
  }

  button {
    border: 0;
    margin: 0;
    padding: 0;
    background-color: initial;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: "Pretendard-Regular";
    padding: 0 2rem;
    margin: auto
  }

  :root {
    --dark-gray: #686868;
    --light-gray: #ccc;
  }

  body[data-theme="light"] {
    background-color: #fff;
    color: #000;
    --channel-title-hover: #000;
    --channel-title: var(--dark-gray);
    --des-bg-color: #eee;
    --des-bg-color-hover: #ddd;
  }
  body[data-theme="dark"] {
    background-color: rgb(15,15,15);
    color: #fff;
    --channel-title-hover: #fff;
    --channel-title: var(--light-gray);
    --des-bg-color: #272727;
    --des-bg-color-hover: #3f3f3f;
  }
`;

export default GlobalStyle;
