import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

import Header from "./components/Header";
import MyApp from "./MyApp";

export const metadata = {
  title: {
    template: "%s | Åsa Norberg",
    default: "Åsa Norberg",
  },
  description: "Junior frontend developer",

  openGraph: {
    title: "Åsa Norberg | Portfolio",
    description: 'Junior frontend developer"',
    url: "https://nextjs.org", //ändra till domännamn
    siteName: "Åsa Norberg",
    images: {
      url: "https://nextjs.org/og.png", // //ändra till domännamn med bild
      width: 800,
      height: 600,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={montserrat.className}>
        <MyApp>
          <Header />
          {children}
        </MyApp>
      </body>{" "}
    </html>
  );
}
