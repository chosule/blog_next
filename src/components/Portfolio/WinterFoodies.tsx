'use client';
import { useInView } from "react-intersection-observer";
import Wrap from "./common/Wrap";
import { useEffect } from "react";
import ImageWrap from "./common/ImageWrap";
import gsap from "gsap";
import winterfoodiesImg1 from "../../../public/portfolio/winterfoodiesImg1.png"
import TextWrap from "./common/TextWrap";
import Title from "../Title";
import Text from "../Text";
import AnchorLink from "./common/AnchorLink";
import StackWrap from "./common/StackWrap";



const stackItems = [
    { text: "React", color: "text-neutral-900", bgColor: "bg-[#00d8ff]" },
    { text: "Nextjs (Page router)", color: "text-neutral-50", bgColor: "bg-neutral-900" },
    { text: "Typescript", color: "text-neutral-50", bgColor: "bg-[#3381ff]" },
    { text: "Styled-componet", color: "text-neutral-50", bgColor: "bg-[#CC6699]" },
    { text: "ReactQuery(데이터관리)", color: "text-neutral-50", bgColor: "bg-[#ea580c]" },
    { text: "Recoil(상태관리)", color: "text-neutral-50", bgColor: "bg-[#303846]" },
  ];

export default function WinterFoodies() {
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
        <Wrap id="winterfoodies" ref={ref}>
            <ImageWrap imageTop={winterfoodiesImg1} imageBottom={winterfoodiesImg1}/>
            <TextWrap>
                <Title>WinterFoodies 사이드 프로젝트</Title>
                <Text className="leading-loose">백엔드 1명과 제가 프론트 개발 1명(저) , 총 두명으로 이루어진 <span className="strong">포트폴리오용 사이드 프로젝트</span> 입니다.<br/>겨울용 길거리 간식 스토어를 찾아서 주문을 담아, 주문요청까지 할 수있도록 구성했습니다.</Text>
                <StackWrap stackItems={stackItems}/>
                <AnchorLink text="Ad_service 📝" href="#adservice"/>
            </TextWrap>
        </Wrap>
    )
}