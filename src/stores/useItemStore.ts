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
