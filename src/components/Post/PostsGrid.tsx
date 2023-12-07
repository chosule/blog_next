import { Posts } from "@/service/getPosts";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import PostCard from "./PostCard";

type Props = {
    post: Posts
}
export default function PostsGrid({posts}:Props) {
    
     return(
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {posts?.map((post)=>(
                <li key={post.path} className="w-60 h-full rounded-xl bg-neutral-100 transition-transform transform hover:-translate-y-1 drop-shadow-xl">
                    <PostCard post={post}/>
                </li>
            ))}
        </ul>
     )
}