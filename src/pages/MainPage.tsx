import React, { useState, useEffect } from "react";
import Card from "components/common/Card";
import styles from "styles/Main/MainPage.module.css";

interface PropsType {
  src: string;
  title: string;
  description: string;
  publishedAt: string;
  channelTitle: string;
}

const MainPage = () => {
  const [item, setItem] = useState<PropsType>({
    src: "https://i.ytimg.com/vi/BmC1cmItiGs/sddefault.jpg",
    title: "타이틀",
    description:
      "11주년에도 또 모이기로 약속해 (feat. 응답하라 칠봉이)\n\n#채널십오야 #와글와글 #유료광고포함 \n#응답하라1994 #응사",
    publishedAt: "생성 날짜",
    channelTitle: "채널 이름",
  });

  const handleResize = () => {
    console.log(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <Card item={item} />
      <Card item={item} />
      <Card item={item} />
      <Card item={item} />
      <Card item={item} />
      <Card item={item} />
      <Card item={item} />
      <Card item={item} />
    </main>
  );
};

export default MainPage;
