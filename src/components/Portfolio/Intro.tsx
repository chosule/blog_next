import AnchorLink from "./AnchorLink";
import Text from "../Text";
import Title from "../Title";
import PortfolioBox from "./PortfolioBox";

export default function Intro() {
  return (
    <section id="intro" className="relative h-screen">
      <PortfolioBox>
        <Title className="whitespace-pre-wrap">{`안녕하세요.😀 \ntest 문구 입니다.`}</Title>
        <AnchorLink text="Read more" href="#article" />
      </PortfolioBox>
    </section>
  );
}
