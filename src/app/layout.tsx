"use client";
import "../styles/globals.css";
import Navigation from "./components/navigation";
import { useThemeSwitcher } from "./store/useThemeSwitcher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useThemeSwitcher();

  return (
    <html lang="en" data-theme={theme}>
      <head />
      <body>
        <Navigation />
        <div className="flex justify-center w-screen h-screen prose max-w-none">
          <div className="w-full max-w-2xl px-4 mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
