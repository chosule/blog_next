import type { Metadata } from "next";
import "./globals.css";
import "./styles/prose.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import ThemeScript from "@/lips/ThemeScript";

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
      className={`${nanum.variable} [--scroll-mt:5rem]`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <meta
          name="google-site-verification"
          content="uRGN0ilvMgsEgWp-dfj8ISt0CT3m01pnpMsoPTyW6J4"
        />
      </head>
      <body className="relative mx-auto flex w-full max-w-[910px] flex-col">
        <main className="relative grow">
          <Header />
          <Toaster />
          <div className="px-8 md:px-0">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
