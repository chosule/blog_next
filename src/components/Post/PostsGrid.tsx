import { Post } from "@/service/getPostsNew";
import PostCard from "./PostCard";
import uuid from "react-uuid";

type Props = {
  posts: Post[];
  grid?: string;
};

export default function PostsGrid({ posts, grid}: Props) {
    return (
    <ul className={`grid ${grid} gap-8`}>
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
