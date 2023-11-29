import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import SearchCard from "components/search/SearchCard";
import SearchSkeleton from "components/search/SearchSkeleton";
import { getSearchVideoListAPI } from "api/search";
import styles from "styles/search/SearchPage.module.css";
import useHandleScroll from "hooks/useHandleScroll";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [zoom, setZoom] = useState(1);

  const {
    status,
    data: youtubeData,
    error,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["youtubeSearch", searchParams.get("title")!],
    queryFn: ({ pageParam }) =>
      getSearchVideoListAPI(searchParams.get("title")!, pageParam),
    initialPageParam: "",
    getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
  });

  useHandleScroll(fetchNextPage);

  const handleResize = () => {
    const mainWidth = 1096;
    const width = window.innerWidth;
    const newZoom = width < mainWidth ? width / mainWidth : 1;
    setZoom(newZoom);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (status === "pending") return <SearchSkeleton />;
  if (status === "error")
    return <>{"An error has occurred: " + error.message}</>;
  if (youtubeData.pages[0].items.length === 0)
    return <>검색 결과가 없습니다!</>;

  return (
    <main className={styles.main} style={{ zoom: zoom }}>
      {youtubeData.pages
        .flatMap((page) => page.items)
        .map((item, i) => {
          return <SearchCard key={i} item={item} />;
        })}
    </main>
  );
};

export default SearchPage;
