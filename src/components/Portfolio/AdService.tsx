"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import Text from "../Text";
import Wrap from "./Wrap";
import adservice_1 from "../../../public/portfolio/adservice_1.png"
import adservice_2 from "../../../public/portfolio/adservice_2.png"
import Title from "../Title";
import StackBox from "./StackBox";
import ImageWrap from "./ImageWrap";



const stackItems = [
  { text: "React", color: "text-neutral-50", bgColor: "bg-[#3381ff]" },
  { text: "Next", color: "text-neutral-50", bgColor: "bg-[#000]" },
  { text: "Styled-component", color: "text-neutral-50", bgColor: "bg-[#CC6699]" },
  { text: "Emotion", color: "text-neutral-50", bgColor: "bg-[#CC6699]" },
];

export default function AdService() {
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
    <Wrap id="portfolio_1" ref={ref} className="w-full flex flex-col gap-10 md:flex-row	">
        <ImageWrap imageTop={adservice_1} imageBottom={adservice_2}/>
        <div className="flex flex-col gap-5">
          <Title className="text-black">Ad_service</Title>
          <Text className="articles-fade-in text-lx leading-loose">
            재직중 처음으로 참여한 <span className="strong">협업 프로젝트</span> 입니다. <br/>API 통신이
            <span className="strong">Websocket</span>으로 이루어 지고 있습니다. <br/>실사용되는 코드에 대해 경험하고 깊게 이해해볼수 있는 값진 시간이였습니다.
          </Text>
          <div className="flex gap-3 flex-wrap">
            {stackItems.map((item) => (
              <StackBox text={item.text} color={item.color} bgColor={item.bgColor}/>
            ))}
          </div>
        </div>
    </Wrap>
    // <section id="portfolio_1" className="relative h-screen py-[100px]" ref={ref}>
    //   <Wrap className="w-full flex flex-col gap-10 md:flex-row	">
    //     <ImageWrap imageTop={adservice_1} imageBottom={adservice_2}/>
    //     <div className="flex flex-col gap-5">
    //       <Title className="text-black">Ad_service</Title>
    //       <Text className="articles-fade-in text-lx leading-loose">
    //         재직중 처음으로 참여한 <span className="strong">협업 프로젝트</span> 입니다. <br/>API 통신이
    //         <span className="strong">Websocket</span>으로 이루어 지고 있습니다. <br/>실사용되는 코드에 대해 경험하고 깊게 이해해볼수 있는 값진 시간이였습니다.
    //       </Text>
    //       <div className="flex gap-3 flex-wrap">
    //         {stackItems.map((item) => (
    //           <StackBox text={item.text} color={item.color} bgColor={item.bgColor}/>
    //         ))}
    //       </div>
    //     </div>
    //   </Wrap>
    // </section>

    // <Wrap id="article" ref={ref}>
    //     <Title className="articles-fade-in">article이동</Title>
    // </Wrap>
  );
}
