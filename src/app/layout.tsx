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

export const metadata: Metadata = {
  title: "Chosule Blog Main",
  description: "welcome my world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${suit.variable} ${pre.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="relative mx-auto flex w-full max-w-[910px] flex-col px-8 lg:px-0">
        <main className="relative grow">
          <Header />
          <Toaster />
          <div className="mt-36">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
