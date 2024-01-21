import { Post } from "@/service/getPostsNew";
import Image from "next/image";
import Link from "next/link";
import { BsCalendarDate } from "react-icons/bs";

type Props = {
  posts: Post;
};

export default function PostCard({ posts }: Props) {
  return (
    <Link href={`/${posts.slug}`} className="flex flex-col gap-4">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:gap-0">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-900">
            <BsCalendarDate />
            <h3 className="text-xs font-semibold text-neutral-500">
              {posts.date}
            </h3>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900">
            {posts.title}
          </h3>
          <h3 className="text-sm text-neutral-900">{posts.description}</h3>
        </div>
        <Image
          src={`/featureImg/${posts.image}`}
          alt="feature이미지"
          width={225}
          height={153}
          className="self-center rounded-lg drop-shadow-md md:self-start"
        />
      </div>
      <div className="flex gap-3">
        {posts.tags.map((tag, i) => (
          <div key={i} className="tag">
            {tag}
          </div>
        ))}
      </div>
    </Link>
  );
}
