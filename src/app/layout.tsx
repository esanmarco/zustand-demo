"use client";
import { useThemeStore } from "../stores/theme";
import "../styles/globals.css";
import Navigation from "./components/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useThemeStore();
  return (
    <html lang="en" data-theme={theme}>
      <head />
      <body>
        <Navigation />
        <div className="flex justify-center w-screen h-screen prose max-w-none">
          <div className="w-full max-w-3xl px-4 mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
