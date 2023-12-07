import { getAllpost } from "@/service/getPosts"
import Link from "next/link";

export default async function AllPosts() {
    const posts = await getAllpost();
     return(
        <div className="flex flex-col gap-9">
            <h1 className="italic text-4xl font-black">All Posts</h1>
            <ul className="grid grid-cols-2 gap-7">
                {posts.map((post) => (
                    <Link href="" key={post.path} className="transition-transform transform hover:-translate-y-1">
                        <li className="bg-orange-500 h-44">
                            <h3 className="text-xl font-bold">{post.title}</h3>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
     )
}