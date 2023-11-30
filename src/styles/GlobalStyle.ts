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
    word-break: break-all;
  }

  .ellipsis-multi {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.5;
    word-break: break-all;
  }

  .dim {
    position: fixed;
    inset: 0;
  }

  .cover_dim {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
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
    margin: auto;
  }

  :root {
    --gray: #f8f8f8;
    --dark-gray: #686868;
    --light-gray: #ccc;
    --color-black: #000;
    --color-white: #fff;
  }

  body[data-theme="light"] {
    background-color: #fff;
    color: #000;
    --channel-title-hover: #000;
    --channel-title: var(--dark-gray);
    --des-bg-color: #eee;
    --des-bg-color-hover: #ddd;
    --hover-color: #ddd;
    --icon-color: var(--color-black);
    --border-color: var(--dark-gray);
    --button-color: var(--gray);
    --comment-more-button-color: rgba(0,0,0,0.1);
    --textarea-bg-color: #fff;
    --el-text-color: var(--color-black);
    --scroll-bg-color: #fff;
    --scroll-color: #a0a0a5;
    --scroll-hover-color: #babac0;
  }
  body[data-theme="dark"] {
    background-color: rgb(15,15,15);
    color: #fff;
    --channel-title-hover: #fff;
    --channel-title: var(--light-gray);
    --des-bg-color: #272727;
    --des-bg-color-hover: #3f3f3f;
    --hover-color: #3f3f3f;
    --icon-color: var(--color-white);
    --border-color: var(--light-gray);
    --button-color: #272727;
    --comment-more-button-color: rgba(255,255,255,0.2);
    --textarea-bg-color: rgb(15,15,15);
    --el-text-color: var(--color-white);
    --scroll-bg-color: rgb(15,15,15);
    --scroll-color: #babac0;
    --scroll-hover-color: #a0a0a5;
  }

  body::-webkit-scrollbar {
    background-color: inherit;
    width: 1rem;
  }
  body::-webkit-scrollbar-track {
    background-color: inherit;
  }
  body::-webkit-scrollbar-track:hover {
    background-color: inherit
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--scroll-color);
    border-radius: 1rem;
    border: 4px solid var(--scroll-bg-color);
  }
  body::-webkit-scrollbar-thumb:hover {
    background-color: var(--scroll-hover-color);
  }
`;

export default GlobalStyle;
