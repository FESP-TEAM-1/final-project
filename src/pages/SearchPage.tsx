import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SearchCard from "components/search/SearchCard";
import SearchSkeleton from "components/search/SearchSkeleton";
import { YoutubeItem } from "types/mainItem";
import { getSearchVideoListAPI } from "api/search";
import styles from "styles/search/SearchPage.module.css";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const {
    isFetching,
    error,
    data: youtubeData,
    refetch,
  } = useQuery({
    queryKey: ["youtubeSearch"],
    queryFn: () => getSearchVideoListAPI(searchParams.get("title")!),
  });

  useEffect(() => {
    refetch();
  }, [searchParams]);

  if (isFetching) return <SearchSkeleton />;
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
