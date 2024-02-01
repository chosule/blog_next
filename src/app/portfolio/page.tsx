import AdService from "@/components/Portfolio/AdService";
import Blog from "@/components/Portfolio/Blog";
import Intro from "@/components/Portfolio/Intro";
import NportVerse from "@/components/Portfolio/NportVerse";
import WinterFoodies from "@/components/Portfolio/WinterFoodies";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:'portfolio chosule',
  description: "김초슬 포트폴리오 입니다.",
};

export default function PortfolioPage() {
  return (
    <div className="relative">
      <Intro />
      <NportVerse/>
      <AdService />
      <WinterFoodies/>
      <Blog/>
    </div>
  );
}
