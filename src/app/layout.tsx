import type { Metadata } from "next";
import "./globals.css";
import "./styles/prose.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import ThemeScript from "@/lips/ThemeScript";

const suit = localFont({
  src: "../../public/fonts/SUIT-Variable.ttf",
  variable: "--font-suit",
});

const pre = localFont({
  src: "../../public/fonts/Pretendard-Medium.woff",
  variable: "--font-pre",
});

const nanum = localFont({
  src: "../../public/fonts/NanumSquareNeoOTF-Rg.otf",
  variable: "--font-nanum",
});

export const metadata: Metadata = {
  title: {
    default: "chosule blog",
    template: "chosule blog | %s",
  },
  description: "김초슬 블로그 입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${suit.variable} ${nanum.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="relative mx-auto flex w-full max-w-[910px] flex-col">
        <main className="relative grow">
          <Header />
          <Toaster />
          <div className="mt-36 px-8 md:px-0">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
