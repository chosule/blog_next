import {Black_Han_Sans} from "next/font/google"
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";


// const blockSans = Black_Han_Sans({ subsets: ['latin'] });

export default function Hero() {
     return(
        <div>
            <h1 className="text-3xl font-black italic">Chosule</h1>
            <p className="text-xl italic">오늘보다 내일 더 나은 FE가 되고싶은 -</p>
            <Link href="/about" className="flex items-center gap-2 italic">
                More about me <FaArrowRightLong/>
            </Link>
        </div>
     )
}