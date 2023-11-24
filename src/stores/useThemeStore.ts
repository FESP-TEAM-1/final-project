import { create } from "zustand";
import { persist } from "zustand/middleware";

interface useThemeStoreType {
  darkMode: boolean;
  setDarkMode: (val: any) => void;
}

export const useThemeStore = create(
  persist<useThemeStoreType>(
    (set) => ({
        darkMode: false,
        setDarkMode: (val) => {
          set(() => ({ darkMode: val }));
          document.body.dataset.theme = val ? 'dark' : 'light';
        }
    }),
    {
      name: "darkMode-storage",
    }
  )
);
