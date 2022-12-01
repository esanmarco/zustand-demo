import create from "zustand";

interface Store {
  theme: string;
  setTheme: (theme: string) => void;
}

export const useThemeStore = create<Store>((set) => ({
  theme: "light",
  setTheme: (theme: string) => set({ theme }),
}));
