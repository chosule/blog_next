import Hero from "@/components/Hero";
import LoadingThemeButton from "@/components/LoadingThemeButton";
import FeaturePost from "@/components/Post/FeaturePost";
import dynamic from "next/dynamic";

export default function HomePage() {
  return (
    <section className="mt-20 flex h-full flex-col gap-10 md:mt-10">
      <Hero />
      <FeaturePost />
    </section>
  );
}
