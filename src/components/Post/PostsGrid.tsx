import { Post } from "@/service/getPostsNew";
import PostCard from "./PostCard";
import uuid from "react-uuid";

type Props = {
  posts: Post[];
};

export default function PostsGrid({ posts }: Props) {
    return (
    <ul className="grid grid-cols-2 gap-8 sm:grid-cols-2">
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
