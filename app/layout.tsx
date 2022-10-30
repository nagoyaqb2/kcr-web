import "./globals.css";
import { Exo_2, Figtree } from "@next/font/google";
import Navbar from "./navbar";

const exo = Exo_2();
const figtree = Figtree();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={figtree.className}>
      <head>
        <title>Next.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="w-full bg-[#fcfcfc] box-border">
        <Navbar />
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
