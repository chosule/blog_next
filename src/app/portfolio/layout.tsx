import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ThemeScript from "@/lips/ThemeScript";
import { Toaster } from "react-hot-toast";

export default function PortfolioLayout({children
    }:{
        children:React.ReactNode;
    }) { 
     return(
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
            <div className="px-8">{children}</div>
          </main>
          <Footer />
        </body>
      </html>
     )
}