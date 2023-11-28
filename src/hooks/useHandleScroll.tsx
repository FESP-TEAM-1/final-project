import React, { useEffect } from "react";
import * as _ from "lodash";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";

type fetchNextPageType = (
  options?: FetchNextPageOptions | undefined
) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>;

const useHandleScroll = (fetchNextPage: fetchNextPageType) => {
  useEffect(() => {
    window.addEventListener("scroll", scrollFn);
    return () => {
      window.addEventListener("scroll", scrollFn);
    };
  }, []);

  const scrollFn = _.debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      fetchNextPage();
    }
  }, 200);

  return;
};

export default useHandleScroll;
