import Image from "next/image";
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";
import profile_img from "public/profile_img.jpg"


// const blockSans = Black_Han_Sans({ subsets: ['latin'] });

export default function Hero() {
     return(
        <article className="flex flex-col gap-10 my-20">
            <h1 className="text-4xl font-black drop-shadow-lg">안녕하세요 김초슬 입니다. 🖐</h1>
            <div className="flex items-center gap-11 sm:flex-col md:flex-row">
                <Image className="rounded-full shadow-xl" src={profile_img} alt="프로필이미지" width={250} height={250} priority/>
                <div className="flex flex-col gap-2">
                    <p className="text-xl whitespace-pre">{`저의 블로그에 오신걸 환영합니다. \n많은 관심 부탁드립니다. 😋`}</p>
                    <Link href="/about" className="flex items-center gap-2  transition-transform transform hover:-translate-y-1 italic">
                        More about me <FaArrowRightLong/>
                    </Link>
                </div>
            </div>
        </article>
     )
}