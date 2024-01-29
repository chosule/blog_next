import { Post } from "@/service/getPostsNew";
import PostCard from "./PostCard";
import uuid from "react-uuid";

type Props = {
  TagsPosts?: Post[];
  titleListPosts?: Post[];
  posts?: Post[];
};

export default function PostsGrid({ TagsPosts, titleListPosts, posts }: Props) {
  return (
    <ul className="flex flex-col gap-7">
      {TagsPosts?.map((post) => (
        <li
          key={uuid()}
          className="drop-shadows-xl h-full w-full transform rounded-xl bg-neutral-80 p-6 transition-transform hover:-translate-y-1"
        >
          <PostCard posts={post} />
        </li>
      ))}
      {titleListPosts &&
        titleListPosts?.map((post, index) => (
          <li
            key={index}
            className="drop-shadows-xl h-full w-full transform rounded-xl bg-neutral-80 p-6 transition-transform hover:-translate-y-1"
          >
            <PostCard posts={post} />
          </li>
        ))}
      {posts &&
        posts.map((post, index) => (
          <li
            key={index}
            className="drop-shadows-xl h-full w-full transform rounded-xl bg-neutral-80 p-6 transition-transform hover:-translate-y-1"
          >
            <PostCard posts={post} />
          </li>
        ))}
    </ul>
  );
}
