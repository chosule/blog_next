import {Black_Han_Sans} from "next/font/google"
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";


// const blockSans = Black_Han_Sans({ subsets: ['latin'] });

export default function Hero() {
     return(
        <div className="flex flex-col gap-10 my-20">
            <h1 className="text-5xl font-black italic">Chosule</h1>
            <div className="flex flex-col gap-2">
                <p className="text-xl italic">오늘보다 내일 더 나은 FE가 되고싶은 -</p>
                <Link href="/about" className="flex items-center gap-2 italic transition-transform transform hover:-translate-y-1">
                    More about me <FaArrowRightLong/>
                </Link>
            </div>
        </div>
     )
}