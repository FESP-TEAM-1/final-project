import React from "react";
import Card from "components/main/Card";
import styles from "styles/main/MainPage.module.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { YoutubeItem } from "types/mainItem";

const MainPage: React.FC = () => {
  const getYoutubeList = async () => {
    const { data } = await axios.get("/videos/popular.json");
    return data;
  };

  const {
    isLoading,
    error,
    data: youtubeData,
  } = useQuery({
    queryKey: ["youtubeData"],
    queryFn: getYoutubeList,
  });

  if (isLoading) return <>"Loading..."</>;

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
