import React from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "components/main/Card";
import MainSkeleton from "components/main/MainSkeleton";
import { getVideoListAPI } from "api/main";
import { YoutubeItem } from "types/mainItem";
import styles from "styles/main/MainPage.module.css";

const MainPage: React.FC = () => {
  const {
    isLoading,
    error,
    data: youtubeData,
  } = useQuery({
    queryKey: ["youtubeData"],
    queryFn: getVideoListAPI,
  });

  if (isLoading) return <MainSkeleton />;
  if (error) return <>{"An error has occurred: " + error.message}</>;

  return (
    <main className={styles.main}>
      {youtubeData.items.map((item: YoutubeItem) => {
        return <Card key={item.id} item={item} />;
      })}
    </main>
  );
};

export default MainPage;
