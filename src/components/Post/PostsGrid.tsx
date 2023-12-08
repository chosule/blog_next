import { Posts } from "@/service/getPosts";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import PostCard from "./PostCard";

type Props = {
  post: Posts;
};
export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {posts?.map((post) => (
        <li
          key={post.path}
          className="h-full w-full transform rounded-xl bg-neutral-100 drop-shadow-xl transition-transform hover:-translate-y-1"
        >
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
