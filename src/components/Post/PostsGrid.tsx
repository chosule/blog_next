import { Post } from "@/service/getPostsNew";
import PostCard from "./PostCard";
import uuid from "react-uuid";

type Props = {
  posts: Post[];
};

export default function PostsGrid({posts}: Props) {
  console.log('posts?',posts)
    return (
    <ul className="flex flex-col gap-7">
      {posts?.map((post) => (
        <li
          key={uuid()}
          className="h-full w-full transform rounded-xl drop-shadow-xl transition-transform bg-secondary hover:-translate-y-1 p-6"
        >
          <PostCard posts={post} />
        </li>
      ))}
    </ul>
  );
}
