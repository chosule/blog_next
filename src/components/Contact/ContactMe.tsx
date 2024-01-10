import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { SiBloglovin } from "react-icons/si";
import Link from "next/link";

export default function ContactMe() {
     return(
        <div className="flex flex-col gap-5 items-center">
            <div className="suit text-2xl">✨ Contact Me</div>
            <ul className="bg-[url('/Image/texture.png')] bg-cover	drop-shadow-2xl w-[439px] h-[200px] flex flex-col items-center justify-center gap-2">
                    <li className="suit italic text-center">
                        <p className="shadow-inner">phone </p>
                        <p>010-9724-3290</p>
                    </li>
                    <li className="suit italic text-center flex justify-evenly items-center gap-2">
                        <p>Github </p>
                        <Link target="_blank" href="https://github.com/chosule" className="text-xl"><FaGithub/></Link>
                    </li>
                    <li className="suit italic text-center flex justify-evenly items-center gap-2">
                        <p>Blog </p>
                        <Link target="_blank" href="#" className="text-xl"><SiBloglovin/></Link>
                    </li>
                    <li className="suit italic text-center flex justify-evenly items-center gap-2">
                        <p>Velog </p>
                        <Link target="_blank" href="https://velog.io/@chosule/posts" className="text-xl"><SiVelog/></Link>
                    </li>
            </ul>
        </div>
     )
}