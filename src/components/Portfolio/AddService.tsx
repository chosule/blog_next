"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import Text from "../Text";
import PortfolioBox from "./PortfolioBox";
import Image from "next/image";
import adservice_1 from "../../../public/portfolio/adservice_1.png"
import adservice_2 from "../../../public/portfolio/adservice_2.png"
import Title from "../Title";

export default function AddService() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 500,
    threshold: 0.5,
  });

  useEffect(() => {
    inView ? fadeIn() : fadeOut();
  }, [inView]);

  const fadeIn = () => {
    gsap.to(".articles-fade-in", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 1,
      },
    });
  };

  const fadeOut = () => {
    gsap.to(".articles-fade-in", {
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power4.out",
    });
  };
  return (
    <section id="portfolio_1" className="relative h-screen py-[100px]" ref={ref}>
      <PortfolioBox className="w-full grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-8">
          <Image className="drop-shadow-lg" src={adservice_1} alt="이미지1" width={450} height={350}/> 
          <Image className="drop-shadow-lg" src={adservice_2} alt="이미지1" width={450} height={350}/> 
        </div>
        <div className="flex flex-col gap-5">
          <Title className="text-black">Ad_service</Title>
          <Text className="articles-fade-in text-lx">
            
          </Text>
        </div>
      </PortfolioBox>
    </section>
    // <PortfolioBox id="article" ref={ref}>
    //     <Title className="articles-fade-in">article이동</Title>
    // </PortfolioBox>
  );
}
