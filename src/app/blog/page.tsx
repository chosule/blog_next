import AllPosts from "@/components/Blog/AllPosts";
import BlogCategory from "@/components/Blog/BlogCategory";
import { getAllpost } from "@/service/getPosts";

export default async function BlogPage() {
   const posts = await getAllpost();  
   
   return(
        <section>
            <BlogCategory posts={posts}/>
            <AllPosts/>
        </section>
     )
}