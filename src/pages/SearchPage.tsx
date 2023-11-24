import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SearchCard from "components/search/SearchCard";
import { YoutubeItem } from "types/mainItem";
import styles from "styles/search/SearchPage.module.css";
import { useSearchParams } from "react-router-dom";

const getYoutubeList = async (title: string) => {
  const { data } = await axios.get("/videos/popular.json");
  const titleToLowerCase = title.toLowerCase();
  const filteredItems = data.items.filter((i: YoutubeItem) =>
    i.snippet.title.toLowerCase().includes(titleToLowerCase)
  );
  return filteredItems;
};

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const {
    isFetching,
    error,
    data: youtubeData,
    refetch,
  } = useQuery({
    queryKey: ["youtubeSearch"],
    queryFn: () => getYoutubeList(searchParams.get("title")!),
  });

  useEffect(() => {
    refetch();
  }, [searchParams]);

  if (isFetching) return <>Loading...</>;
  if (error) return <>{"An error has occurred: " + error.message}</>;
  if (!youtubeData.length) return <>검색 결과가 없습니다!</>;

  return (
    <main className={styles.main}>
      {youtubeData.map((item: YoutubeItem) => {
        return <SearchCard key={item.id} item={item} />;
      })}
    </main>
  );
};

export default SearchPage;
