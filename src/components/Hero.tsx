import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import profile_img from "public/profile_img.jpg";
import Title from "./Title";
import SubTitle from "./SubTitle";
import ContactLink from "./Contact/ui/ContactLink";

export default function Hero() {
  return (
    <article className="mb-20 flex flex-col gap-10">
      <Title>안녕하세요 김초슬입니다. 🖐</Title>
      <div className="flex gap-11 sm:flex-col">
        {/* <Image className="rounded-full shadow-xl" src={profile_img} alt="프로필이미지" width={250} height={250} priority/> */}
        <div className="flex flex-col gap-2">
          <SubTitle>
            {`저의 블로그에 오신걸 환영합니다. \n많은 경험을 통해 계속 성장 중에 있습니다😀`}
          </SubTitle>
          <Link
            href="/about"
            className="text-primary flex transform  items-center gap-2 italic transition-transform hover:-translate-y-1"
          >
            More about me <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </article>
  );
}
