import "../styles/globals.css";
import Navigation from "./components/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={"light"}>
      <head />
      <body>
        <Navigation />
        <div className="flex justify-center w-screen h-screen pt-5 prose max-w-none">
          <div className="w-full max-w-3xl mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
