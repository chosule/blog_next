import { Post } from "@/service/postDataSet";
import Link from "next/link";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

type Props = {
  type: "prev" | "next";
  post: Post;
};
const ICON_CLASSNAME = "text-4xl transition-all hover:text-5xl";
export default function AdjacentPostCard({
  type,
  post: { title, slug },
}: Props) {
  return (
    <div
      className={`flex w-80 items-center	gap-5 bg-slate-100 ${
        type === "next" && "justify-end self-end text-right md:self-baseline"
      } rounded-lg p-3`}
    >
      <Link
        href={`/${slug}`}
        className="flex items-center gap-5 truncate no-underline "
      >
        <div className={`${type === "next" && "order-2"}`}>
          {type === "prev" && (
            <IoArrowBackCircleOutline className={ICON_CLASSNAME} />
          )}
          {type === "next" && (
            <IoArrowForwardCircleOutline className={ICON_CLASSNAME} />
          )}
        </div>
        <div>
          <h3 className="pre mt-0 text-sm dark:text-neutral-890">
            {type === "prev" && "이전 포스트"}
            {type === "next" && "다음 포스트"}
          </h3>
          <h3 className="pre text-primary mt-0 text-base dark:text-neutral-890">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
}
