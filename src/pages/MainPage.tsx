import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Card from "components/main/Card";
import MainSkeleton from "components/main/MainSkeleton";
import useYoutubeApiStore from "stores/useYoutubeApiStore";
import useHandleScroll from "hooks/useHandleScroll";
import styles from "styles/main/MainPage.module.css";

const MainPage: React.FC = () => {
  const { youtube } = useYoutubeApiStore();
  const {
    status,
    data: youtubeData,
    error,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["youtubeData"],
    queryFn: ({ pageParam }) => youtube.getVideoList(pageParam),
    initialPageParam: "",
    getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
  });

  useHandleScroll(fetchNextPage);

  if (status === "pending") return <MainSkeleton />;
  if (status === "error")
    return <>{"An error has occurred: " + error.message}</>;

  return (
    <main className={styles.main}>
      {youtubeData.pages
        .flatMap((page) => page.items)
        .map((item) => (
          <Card key={item.id} item={item} />
        ))}
    </main>
  );
};

export default MainPage;
