import { getFeaturedPost } from "@/service/getPostsNew";
import PostsGrid from "./PostsGrid";
import { FaArrowRightLong } from "react-icons/fa6";
import Title from "../Title";

export default async function FeaturePost() {
  const posts = await getFeaturedPost();
  return (
    <article className="flex flex-col gap-10">
      <Title>Featured Posts 📌</Title>
      <PostsGrid posts={posts}/>
      <div className="flex transform items-center gap-2 italic transition-transform hover:-translate-y-1">
        <h1>Read all posts</h1>
        <FaArrowRightLong />
      </div>
    </article>
  );
}
