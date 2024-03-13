import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { SiBloglovin } from "react-icons/si";

export default function ContactLink() {
  return (
    <ul className="grid grid-cols-3 gap-2">
      <li className="col-start-1 col-end-4 mt-4 flex text-sm">
        <p className="dark:text-neutral-900">Mobile. </p>
        <p className="dark:text-neutral-900"> 010-9724-3290</p>
      </li>
      <li className="flex items-center gap-2 text-xs">
        <p className="dark:text-neutral-900">Github </p>
        <Link
          target="_blank"
          href="https://github.com/chosule"
          className="text-xl text-neutral-900"
        >
          <FaGithub className="text-md" />
        </Link>
      </li>
      <li className="flex items-center gap-2 text-xs">
        <p className="dark:text-neutral-900">Blog </p>
        <Link
          target="_blank"
          href="https://next-blog-delta-lac.vercel.app/"
          className="text-xl text-neutral-900"
        >
          <SiBloglovin className="dark:bg-neutal-900" />
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
  );
}
