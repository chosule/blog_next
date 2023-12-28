import { Post } from "@/service/getPostsNew";
import Image from "next/image";
import Link from "next/link";
import { CiCalendarDate } from "react-icons/ci";

type Props = {
  posts: Post;
};

export default function PostCard({ posts }: Props) {
  // console.log("posts", posts);
  return (
    <Link href={`/${posts.slug}`} className="">
      <Image
        src={`/featureImg/${posts.image}`}
        alt="feature이미지"
        width={130}
        height={100}
        className="h-44 w-full rounded-t-lg"
      />
      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-center gap-2">
          <CiCalendarDate />
          <h3 className="text-sm">{posts.date}</h3>
        </div>
        <h3 className="text-lg font-black">{posts.title}</h3>
        {/* <h3 className="fext-2xl font-bold">타이틀{title}</h3> */}
      </div>
    </Link>
  );
}
