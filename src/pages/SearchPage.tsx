import { useSearchParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import SearchCard from "components/search/SearchCard";
import SearchSkeleton from "components/search/SearchSkeleton";
import useYoutubeApiStore from "stores/useYoutubeApiStore";
import useHandleScroll from "hooks/useHandleScroll";
import styles from "styles/search/SearchPage.module.css";

const SearchPage = () => {
  const { youtube } = useYoutubeApiStore();
  const [searchParams] = useSearchParams();

  const {
    status,
    data: youtubeData,
    error,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["youtubeSearch", searchParams.get("title")!],
    queryFn: ({ pageParam }) =>
      youtube!.getSearchVideoList(searchParams.get("title")!, pageParam),
    initialPageParam: "",
    getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
  });

  useHandleScroll(fetchNextPage);

  if (status === "pending") return <SearchSkeleton />;
  if (status === "error")
    return <>{"An error has occurred: " + error.message}</>;
  if (youtubeData.pages[0].items.length === 0)
    return <>검색 결과가 없습니다!</>;

  return (
    <main className={styles.main}>
      {youtubeData.pages
        .flatMap((page) => page.items)
        .map((item, i) => {
          return <SearchCard key={i} item={item} />;
        })}
    </main>
  );
};

export default SearchPage;
