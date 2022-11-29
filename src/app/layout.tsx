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
        <div className="mt-5 prose flex justify-center w-screen h-screen max-w-none">
          <div className="mx-auto max-w-3xl w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
