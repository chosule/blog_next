import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ThemeScript from "@/lips/ThemeScript";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";


const nanum = localFont({
    src: "../../../public/fonts/NanumSquareNeoOTF-Rg.otf",
    variable: "--font-nanum",
  });

  
export default function PortfolioLayout({children
    }:{
        children:React.ReactNode;
    }) { 
     return(
       <div>{children}</div>
     )
}