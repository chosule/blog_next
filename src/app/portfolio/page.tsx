import AdService from "@/components/Portfolio/AdService";
import Intro from "@/components/Portfolio/Intro";
import NportVerse from "@/components/Portfolio/NportVerse";

export default function Portfolio() {
  return (
    <div className="relative">
      <Intro />
      <NportVerse/>
      <AdService />
    </div>
  );
}
