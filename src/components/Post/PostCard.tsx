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
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <BsCalendarDate />
            <h3 className="text-sm suit font-semibold">{posts.date}</h3>
          </div>
          <h3 className="text-lg font-semibold pre">{posts.title}</h3>
          <h3 className="text-sm suit">{posts.description}</h3>
        </div>
        <Image
          src={`/featureImg/${posts.image}`}
          alt="feature이미지"
          width={180}
          height={60}
          className="rounded-md"
        />
      </div>
      <div className="bg-blue w-20 text-center p-1 rounded suit font-semibold">{posts.tags}</div>
    </Link>
  );
}
