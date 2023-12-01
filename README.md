# [ FEPS 1기 🦁 | 1조 Team477 | 유튜브 클론 프로젝트]

### Team477 소개

|                            [신은수](https://github.com/Shineun9)                            |                            [윤태현](https://github.com/yoonth95)                            |                            [이보경](https://github.com/ebokyung)                            |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
| <img width="300" height="300" src="https://avatars.githubusercontent.com/u/75666099?v=4" /> | <img width="300" height="300" src="https://avatars.githubusercontent.com/u/78673090?v=4" /> | <img width="300" height="300" src="https://avatars.githubusercontent.com/u/90684277?v=4" /> |

<br>
<br>

## 목차

1. [목표](#goal)
2. [프로젝트 소개](#intro)
   - 개발기간
   - 프로젝트 사용법
3. [기술 스택](#tech)
4. [화면 구성](#screen)
5. [주요 기능](#feature)
6. [컨벤션](#convention)
7. [디렉토리 구조](#directory)

<br>
<br>

## <span id="goal">1. 목표<span>

- Zustand, TanstackQuery 등 익숙하지 않은 라이브러리 사용 경험
- 운영서버(YOUTUBE)인지 또는 개발서버(json 데이터)에 따라 개발
- 댓글 기능 구현 시 백엔드 없이 Supabase를 사용하여 DB 연동

<br>
<br>

## <span id="intro">2. 프로젝트 소개</span>

### Zustand, TanstackQuery, Supabase, YouTube Data API 를 활용하여 동영상 시청이 가능한 반응형 웹 사이트 제작

### [🔗 477Tube 테스트 하러가기](https://477tube.netlify.app/)

<br>

### 개발 기간

- 1차 개발 : 2023년 11월 20일(월) ~ 2023년 11월 22일(수)
- 2차 개발 : 2023년 11월 23일(목) ~ 2023년 11월 26일(일)
- 3차 개발 : 2023년 11월 27일(월) ~ 2023년 12월 01일(금)

<br>

### 프로젝트 사용법

- 구동법

  ```
  $ git clone https://github.com/FESP-TEAM-1/final-project.git
  $ cd final-project
  $ npm install
  $ npm start
  ```

- .env.develop / .env.production
  ```
  REACT_APP_SUPABASE_PROJECT_ID=
  REACT_APP_SUPABASE_PROJECT_API_KEY=REACT_APP_SUPABASE_PROJECT_API_KEY=
  REACT_APP_YOUTUBE_PROJECT_API_KEY=
  ```

<br>
<br>

## <span id='tech'>3. 기술 스택</span>

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Package Manager

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![createreactapp](https://img.shields.io/badge/createreactapp-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![reactrouter](https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![TanstackQuery](https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)
![eslint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Zustand](https://img.shields.io/badge/zustand-black?style=for-the-badge&logo=zustand&logoColor=white)

### Communication

![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-white?style=for-the-badge&logo=Notion&logoColor=black)

<br>

## <span id='screen'>4. 화면 구성</span>

| <img height="120" alt="image" src="https://github.com/yoonth95/Web-Builder/assets/78673090/f750823a-e0b7-433f-954d-68af341f97d0"> | <img height="120" alt="image" src="https://github.com/yoonth95/Web-Builder/assets/78673090/9ca2c9bd-b0e7-41ee-822f-7195ac3787a1"> | <img height="120" alt="image" src="https://github.com/yoonth95/Web-Builder/assets/78673090/71965a25-9c12-4d7d-b512-f126c46dbb88"> |
| :-------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
|                                                           [메인페이지]                                                            |                                                           [상세페이지]                                                            |                                                           [검색페이지]                                                            |

<br>

## <span id='feature'>5. 주요 기능</span>

- 다크모드 <br>
- 반응형<br>
- 무한 스크롤 <br>
- 썸네일 영상 자동 재생 <br>
- 영상 검색 기능 <br>
- 댓글 추가/삭제 기능 <br>
  <br>

### 1) 메인 페이지 <br>

<img width='640' alt="image" src="https://github.com/FESP-TEAM-1/final-project/assets/90684277/200b8d5b-5e5e-49ee-bb49-73a30b72a3cd">

### 2) 상세 페이지 <br>

<img width='640' alt="image" src="https://github.com/FESP-TEAM-1/final-project/assets/90684277/3709eb21-2540-4382-87c3-5f7c9a234018">

### 3) 검색, 테마 <br>

<img width='640' alt="image" src="https://github.com/FESP-TEAM-1/final-project/assets/90684277/7976e977-2912-49dc-a2bb-69733295be2b">

<br>

## <span id='convention'>6. 컨벤션</span>

### [📕 커밋 컨벤션](https://github.com/FESP-TEAM-1/final-project/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98)

### [📘 코드 컨벤션](https://github.com/FESP-TEAM-1/final-project/wiki/%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98)

<br>

## <span id='directory'>7. 디렉토리 구조</span>

```
📦FESP-FINAL1
 ┣ 📂public
 ┃ ┣ 📂videos
 ┃ ┃ ┣ 📂searchByChannels
 ┃ ┃ ┃ ┣ 📜search-by-channel-id-UC1x03ziDHPct2xTikLyfMDA.json
 ┃ ┃ ┃ ┗  ...
 ┃ ┃ ┗ 📜popular.json
 ┃ ┣ 📜index.html
 ┃ ┣ 📜logo-477tube.svg
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂supabase
 ┃ ┃ ┃ ┗ 📜videoComment.ts
 ┃ ┃ ┣ 📜fakeYoutubeClient.ts
 ┃ ┃ ┣ 📜youtube.ts
 ┃ ┃ ┗ 📜youtubeClient.ts
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┣ 📂skeleton
 ┃ ┃ ┃ ┃ ┣ 📜Comment.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📜RelatedVideo.tsx
 ┃ ┃ ┃ ┃ ┗ 📜Video.tsx
 ┃ ┃ ┃ ┣ 📜Comment.tsx
 ┃ ┃ ┃ ┣ 📜CommentForm.tsx
 ┃ ┃ ┃ ┣ 📜CommentSection.tsx
 ┃ ┃ ┃ ┣ 📜RelatedCard.tsx
 ┃ ┃ ┃ ┣ 📜RelatedSection.tsx
 ┃ ┃ ┃ ┣ 📜Video.tsx
 ┃ ┃ ┃ ┗ 📜VideoSection.tsx
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┗ 📜Header.tsx
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┣ 📜Card.tsx
 ┃ ┃ ┃ ┗ 📜MainSkeleton.tsx
 ┃ ┃ ┗ 📂search
 ┃ ┃ ┃ ┣ 📜SearchCard.tsx
 ┃ ┃ ┃ ┗ 📜SearchSkeleton.tsx
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜useHandleHover.tsx
 ┃ ┃ ┣ 📜useHandleMainHover.tsx
 ┃ ┃ ┣ 📜useHandleResizeHeight.tsx
 ┃ ┃ ┣ 📜useHandleScroll.tsx
 ┃ ┃ ┗ 📜useImgLazyLoading.tsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜DetailPage.tsx
 ┃ ┃ ┣ 📜ErrorPage.tsx
 ┃ ┃ ┣ 📜MainPage.tsx
 ┃ ┃ ┗ 📜SearchPage.tsx
 ┃ ┣ 📂stores
 ┃ ┃ ┣ 📜useThemeStore.ts
 ┃ ┃ ┗ 📜useYoutubeApiStore.ts
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┣ 📜Comment.module.css
 ┃ ┃ ┃ ┣ 📜CommentForm.module.css
 ┃ ┃ ┃ ┣ 📜CommentSection.module.css
 ┃ ┃ ┃ ┣ 📜DetailPage.module.css
 ┃ ┃ ┃ ┣ 📜RelatedCard.module.css
 ┃ ┃ ┃ ┣ 📜RelatedSection.module.css
 ┃ ┃ ┃ ┗ 📜Video.module.css
 ┃ ┃ ┣ 📂error
 ┃ ┃ ┃ ┗ 📜ErrorPage.module.css
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┗ 📜Header.module.css
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┣ 📜Card.module.css
 ┃ ┃ ┃ ┗ 📜MainPage.module.css
 ┃ ┃ ┣ 📂search
 ┃ ┃ ┃ ┣ 📜SearchCard.module.css
 ┃ ┃ ┃ ┗ 📜SearchPage.module.css
 ┃ ┃ ┗ 📜GlobalStyle.ts
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜commentItem.ts
 ┃ ┃ ┣ 📜popularVideo.ts
 ┃ ┃ ┣ 📜relatedVideo.ts
 ┃ ┃ ┗ 📜supabaseComment.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜getElapsedTime.ts
 ┃ ┃ ┗ 📜setDecodeHTMLEntities.ts
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜react-app-env.d.ts
 ┃ ┣ 📜Root.tsx
 ┃ ┗ 📜Router.tsx
 ┣ 📜.env.development
 ┣ 📜.env.production
 ┣ 📜.eslintrc.config.js
 ┣ 📜.prettierrc.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tsconfig.json
```

<br>
