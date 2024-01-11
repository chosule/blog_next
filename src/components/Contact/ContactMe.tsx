import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { SiBloglovin } from "react-icons/si";
import Link from "next/link";

export default function ContactMe() {
  return (
      <div className="flex flex-col items-center gap-5">
        <div className="suit text-2xl">✨ Contact Me</div>
        <ul className="relative flex h-[200px] w-[439px] flex-col items-center justify-center gap-2 overflow-hidden bg-cover drop-shadow-2xl">
          <li className="background-item suit text-center italic sm:bg-[url('/Image/wave.jpeg')] opacity-[.6]"></li>
          <li className="suit text-center italic font-semibold">
            <p>phone </p>
            <p>010-9724-3290</p>
          </li>
          <li className="suit flex items-center justify-evenly gap-2 text-center italic font-semibold">
            <p>Github </p>
            <Link
              target="_blank"
              href="https://github.com/chosule"
              className="text-xl"
            >
              <FaGithub />
            </Link>
          </li>
          <li className="suit flex items-center justify-evenly gap-2 text-center italic font-semibold">
            <p>Blog </p>
            <Link target="_blank" href="#" className="text-xl">
              <SiBloglovin />
            </Link>
          </li>
          <li className="suit flex items-center justify-evenly gap-2 text-center italic font-semibold">
            <p>Velog </p>
            <Link
              target="_blank"
              href="https://velog.io/@chosule/posts"
              className="text-xl"
            >
              <SiVelog />
            </Link>
          </li>
        </ul>
      </div>

  );
}
