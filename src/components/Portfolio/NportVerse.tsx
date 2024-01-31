'use client';
import { useInView } from "react-intersection-observer";
import Wrap from "./common/Wrap";
import ImageWrap from "./common/ImageWrap";
import bankonverse from "../../../public/portfolio/bankonverse.png"
import npikasite from "../../../public/portfolio/npikasite.png"
import { useEffect } from "react";
import gsap from "gsap";
import TextWrap from "./common/TextWrap";
import Title from "../Title";
import Text from "../Text";
import StackWrap from "./common/StackWrap";
import AnchorLink from "./common/AnchorLink";

const stackItems = [
    { text: "Javascript", color: "text-neutral-900", bgColor: "bg-[#f6e613]" },
    { text: "Sass", color: "text-neutral-50", bgColor: "bg-[#CC6699]" },
    { text: "Html", color: "text-neutral-50", bgColor: "bg-[#3381ff]" },
    { text: "Css", color: "text-neutral-50", bgColor: "bg-[#CC6699]" },

  ];

export default function NportVerse() {
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
        <Wrap id="nportverse" ref={ref} className="flex flex-col md:flex-row ">
            <ImageWrap imageTop={bankonverse} imageBottom={npikasite}/>
            <TextWrap className="backdrop-blur-lg">
                <Title>(주) NPortVerse</Title>
                <Text className="leading-loose">NPortVerse 사이트는 NFT 소유권증서를 거래할수 있는 플랫폼 입니다.<br/><span className="strong">웹퍼블리싱</span> 을 담당하여 플랫폼 유지및 보수를 담당 했습니다.</Text>
                <StackWrap stackItems={stackItems}/>
                <AnchorLink text="Ad_service 📝" href="#adservice"/>
            </TextWrap>
        </Wrap>
     )
}