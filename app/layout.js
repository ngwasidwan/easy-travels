import "@/app/globals.css";
import Header from "./_components/Header";
import { Inter } from "next/font/google";
import { ContextProvider } from "./_components/ContextProvider";

export const metadata = {
  title: "Easy Travels",
};

const myFont = Inter({
  display: "swap",
  family: "Inter",
  subsets: ["latin"],
  fallback: ["sans-serif"],
  weight: ["400", "500", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} relative text-slate-700 text-lg bg-green-100 `}
      >
        <Header />
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
