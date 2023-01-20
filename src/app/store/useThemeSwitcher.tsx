import create from "zustand";

interface ThemeStore {
  theme: string;
  setTheme: (theme: string) => void;
}

export const useThemeSwitcher = create<ThemeStore>((set: any) => ({
  theme: "light",
  setTheme: (theme: string) => set({ theme }),
}));
