import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
     
     return(
        <div className="border-t-[1px] h-10 flex flex-col items-end gap-2 py-2.5 my-20">
            <ul className="flex gap-2">
                <li>
                    <Link href=""><FaGithub/></Link>
                </li>
                <li>
                    <Link href=""><FaGithub/></Link>
                </li>
            </ul>
            <div>
                <p>© 2023 chosule blog by Next.js</p>
                
            </div>
        </div>
     )
}