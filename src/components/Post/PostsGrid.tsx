import { Post } from "@/service/getPostsNew";
import PostCard from "./PostCard";
import uuid from "react-uuid";

type Props = {
  posts: Post[];
};

export default function PostsGrid({ posts}: Props) {
    return (
    <ul className={`grid gap-8 grid-cols-[repeat(auto-fill,minmax(240px,_1fr))]`}>
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
