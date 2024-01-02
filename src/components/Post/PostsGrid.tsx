import { Post } from "@/service/getPostsNew";
import PostCard from "./PostCard";
import uuid from "react-uuid";

type Props = {
  posts: Post[];
  grid?: string;
  smGrid?:string;
};

export default function PostsGrid({ posts, grid, smGrid}: Props) {
    return (
    <ul className={`grid gap-8 lg:${grid} sm:${smGrid}`}>
      {posts?.map((post) => (
        <li
          key={uuid()}
          className="h-full w-82 transform rounded-xl bg-neutral-100 drop-shadow-xl transition-transform hover:-translate-y-1"
        >
          <PostCard posts={post} />
        </li>
      ))}
    </ul>
  );
}
