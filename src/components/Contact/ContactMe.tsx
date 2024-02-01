import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { SiBloglovin } from "react-icons/si";
import Link from "next/link";
import SubTitle from "../SubTitle";

export default function ContactMe() {
  return (
      <div className="flex flex-col items-center gap-5">
        <SubTitle>✨ Contact me</SubTitle>
        <ul className="flex h-[200px] w-[439px] flex-col gap-3 overflow-hidden bg-cover rounded-xl bg-neutral-50 p-8 contact-me-shadow">
          <li className="">
            <h3 className="font-bold text-lg dark:text-neutral-900">김초슬</h3>
            <h3 className="text-xs dark:text-neutral-900">FrontEnd</h3>
          </li>
          <ul className="grid grid-cols-3 gap-2">
            <li className="text-sm flex mt-4 col-start-1 col-end-4">
              <p className="dark:text-neutral-900">Mobile. </p>
              <p className="dark:text-neutral-900"> 010-9724-3290</p>
            </li>
            <li className="flex gap-2 text-xs items-center">
              <p className="dark:text-neutral-900">Github </p>
              <Link
                target="_blank"
                href="https://github.com/chosule"
                className="text-xl text-neutral-900"
              >
                <FaGithub className="text-md"/>
              </Link>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <p className="dark:text-neutral-900">Blog </p>
              <Link target="_blank" href="#" className="text-xl text-neutral-900">
                <SiBloglovin className="dark:bg-neutal-900"/>
              </Link>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <p className="dark:text-neutral-900">Velog </p>
              <Link
                target="_blank"
                href="https://velog.io/@chosule/posts"
                className="text-xl dark:text-neutral-900"
              >
                <SiVelog />
              </Link>
            </li>
          </ul>
        </ul>
      </div>

  );
}
