import "./globals.css";
import { Montserrat } from "@next/font/google";
import Navbar from "./navbar";

const montserrat = Montserrat();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <title>Koala-Ty Control Racing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="w-full bg-[hsla(0,0%,100%,.33)] box-border antialiased overscroll-none">
        <Navbar />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
