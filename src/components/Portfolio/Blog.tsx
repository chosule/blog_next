'use client';

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import Wrap from "./common/Wrap";
import ImageWrap from "./common/ImageWrap";
import TextWrap from "./common/TextWrap";
import Title from "../Title";
import Text from "../Text";
import StackWrap from "./common/StackWrap";
import AnchorLink from "./common/AnchorLink";
import chosuleblogimage from "../../../public/portfolio/chosuleblogimage.png"
import chosuleblogimage2 from "../../../public/portfolio/chosuleblogimage2.png"

const stackItems = [
    { text: "Nextjs (Page router)", color: "text-neutral-50", bgColor: "bg-neutral-900" },
    { text: "React", color: "text-neutral-900", bgColor: "bg-[#00d8ff]" },
    { text: "Typescript", color: "text-neutral-50", bgColor: "bg-[#3381ff]" },
    { text: "tailwindCss", color: "text-neutral-50", bgColor: "bg-[#CC6699]" },
];


export default function Blog() {
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
      
     return(
        <Wrap id="chosuleblog" ref={ref}>
        <ImageWrap imageTop={chosuleblogimage} imageBottom={chosuleblogimage2}/>
        <TextWrap>
            <Title>WinterFoodies 사이드 프로젝트</Title>
            <Text className="leading-loose">백엔드 1명과 제가 프론트 개발 1명(저) , 총 두명으로 이루어진 <span className="strong">포트폴리오용 사이드 프로젝트</span> 입니다.<br/>겨울용 길거리 간식 스토어를 찾아서 주문을 담아, 주문요청까지 할 수있도록 구성했습니다.</Text>
            <StackWrap stackItems={stackItems}/>
            <AnchorLink text="contact Me 💎" href="#adservice"/>
        </TextWrap>
    </Wrap>
     )
}