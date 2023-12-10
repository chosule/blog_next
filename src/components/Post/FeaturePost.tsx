import { getFeaturedPost } from "@/service/getPosts";
import PostsGrid from "./PostsGrid";
import { FaArrowRightLong } from "react-icons/fa6";

export default async function FeaturePost() {
  const posts = await getFeaturedPost();

  return (
    <div className="flex flex-col gap-10">
      <div className="text-4xl font-black italic">Featured Posts 📌</div>
      <PostsGrid posts={posts} />
      <div className="flex transform items-center gap-2 italic transition-transform hover:-translate-y-1">
        <h1>Read all posts</h1>
        <FaArrowRightLong />
      </div>
    </div>
  );
}
