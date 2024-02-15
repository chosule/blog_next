import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { PiGithubLogoThin } from "react-icons/pi";
import { PiGithubLogoDuotone } from "react-icons/pi";
import { SiBloglovin } from "react-icons/si";

export default function Footer() {
  return (
    <section className="m-20 flex flex-col items-center gap-2 border-t-[1px] px-8 py-4 md:px-0">
      <ul className="flex gap-2">
        <li>
          <Link href="https://github.com/chosule" target="_blank">
            <PiGithubLogoDuotone />
          </Link>
        </li>
        <li>
          <Link href="https://velog.io/@chosule/posts" target="_blank">
            <SiBloglovin />
          </Link>
        </li>
      </ul>
      <div>
        <p className="text-xs">© 2023 chosule blog by Next.js</p>
      </div>
    </section>
  );
}
