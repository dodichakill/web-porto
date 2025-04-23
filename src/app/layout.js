import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dodi Portofolio",
  description: "A Web Portfolio from Dodi",
  keywords: [
    "Dodi",
    "Portofolio",
    "Web",
    "Portfolio",
    "Dodi Dev",
    "Dodi Developer",
    "Dodi Herlangga",
    "Dodi Web3",
    "Dodi Fullstack",
    "Dodi UI/UX",
    "Dodi Mobile",
    "Dodi Web",
    "Dodi Cirebon",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
