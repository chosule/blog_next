import { getAllPostsPath } from "@/service/getPostsNew";

export default async function PostsPage() {
  const posts = await getAllPostsPath();
  console.log("posts", posts);
  return <div>d</div>;
}
