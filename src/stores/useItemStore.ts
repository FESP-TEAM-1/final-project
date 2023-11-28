import { create } from "zustand";
import { persist } from "zustand/middleware";

interface useItemStoreType {
  itemInfo: {
    title: string;
    description: string;
    channelTitle: string;
  };
  setItemInfo: (val: any) => void;
}

export const useItemStore = create(
  persist<useItemStoreType>(
    (set) => ({
      itemInfo: {
        title: "",
        description: "",
        channelTitle: "",
      },
      setItemInfo: (val) => set(() => ({ itemInfo: val })),
    }),
    {
      name: "item-storage",
    }
  )
);

// review
// item이란 단어가 모호합니다. videoItem이라고 명명하는 게 어떤가요?
