import { getAllpost } from "@/service/getPosts";
import Link from "next/link";

export default async function AllPosts() {
  const posts = await getAllpost();
  return (
    <section className="flex flex-col gap-9">
      <h1 className="text-4xl font-black italic">All Posts</h1>
      <ul className="grid grid-cols-2 gap-7">
        {posts.map((post) => (
          <Link
            href=""
            key={post.path}
            className="transform transition-transform hover:-translate-y-1"
          >
            <li className="h-44 bg-orange-500">
              <h3 className="text-xl font-bold">{post.title}</h3>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
