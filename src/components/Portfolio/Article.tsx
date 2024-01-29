"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import Text from "../Text";
import PortfolioBox from "./PortfolioBox";
import Title from "../Title";

export default function Article() {
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
    <section id="article" className="relative h-screen py-[100px]" ref={ref}>
      <PortfolioBox>
        <Text className="articles-fade-in text-lx">
          Articles 페이지 애니메이션 test
        </Text>
      </PortfolioBox>
    </section>
    // <PortfolioBox id="article" ref={ref}>
    //     <Title className="articles-fade-in">article이동</Title>
    // </PortfolioBox>
  );
}
