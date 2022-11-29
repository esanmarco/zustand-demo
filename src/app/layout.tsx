import "../styles/globals.css";
import Navigation from "./components/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="black">
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
