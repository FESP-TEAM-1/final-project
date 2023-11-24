import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SearchCard from "components/search/SearchCard";
import { YoutubeItem } from "types/mainItem";
import styles from "styles/search/SearchPage.module.css";

const getYoutubeList = async () => {
  const { data } = await axios.get("/videos/popular.json");
  return data;
};

const SearchPage = () => {
  const {
    isLoading,
    error,
    data: youtubeData,
  } = useQuery({
    queryKey: ["youtubeData"],
    queryFn: getYoutubeList,
  });

  if (isLoading) return <>Loading...</>;
  if (error) return <>{"An error has occurred: " + error.message}</>;

  return (
    <main className={styles.main}>
      {youtubeData.items.map((item: YoutubeItem) => {
        return <SearchCard key={item.id} item={item} />;
      })}
    </main>
  );
};

export default SearchPage;
