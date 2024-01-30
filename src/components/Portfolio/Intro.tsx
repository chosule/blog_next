'use client';
import AnchorLink from "./AnchorLink";
import Title from "../Title";
import PortfolioBox from "./PortfolioBox";
import SubTitle from "../SubTitle";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";


export default function Intro() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 500,
    threshold: 0.5,
  });

  useEffect(() => {
    inView ? fadeIn() : fadeOut();
  }, [inView]);

  const container = useRef();

  useGSAP(() =>{
    let tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(".rotate-ani",{
      x:10,duration:0.5, ease: 'power2.inOut'
    })
    .to(".rotate-ani",{
      x:-10, duration:0.5, ease: 'power2.inOut'
    })
  },{scope:container})
 

  const fadeIn =() =>{
    gsap.to(".text-ani",{
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 1,
      },
    })
  }


  const fadeOut = () => {
    gsap.to(".text-ani", {
      duration: 1,
      opacity: 0,
      y: 130,
      ease: "power4.out",
    });
  };

  useGSAP(() => {
    gsap.to(".box", {x: 360}); 
  
  }, { scope: container });

  
  return (
    <section id="intro" className="relative h-screen" ref={ref}>
      <PortfolioBox className="w-5/6 whitespace-pre-wrap flex gap-10 flex-col text-ani">
        <ImQuotesLeft className="text-2xl dark:text-neutral-50"/>
        <Title className="">{`안녕하세요. 프론트엔드 개발자를 꿈꾸고 있는 김초슬입니다. 😀`}</Title>
        <SubTitle className="leading-loose">
          레이아웃에서부터 세부적인 디자인까지, 코드에{' '}
          <span className="strong">제 생각을 담아내는 것을</span> 즐깁니다.
          <br />
          사용자 경험과 웹성능에 효과적이고 <span className="strong">효율적인 코드에 대해 항상 고민합니다.</span>
          <br />
          <span className="strong">지속적인 개발과 지속적인 통합</span>이 프론트엔드 개발자에게 있어 중요하다고 생각합니다.
        </SubTitle>
        <ImQuotesRight className="text-2xl absolute right-14 bottom-1 dark:text-neutral-50"/>
        <AnchorLink text="포트폴리오 📝" href="#portfolio_1" />
      </PortfolioBox>
    </section>
  );
}
