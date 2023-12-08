import AllPosts from "@/components/Blog/AllPosts";
import FilterCategory from "@/components/Blog/FilterCategory";
import { getAllpost } from "@/service/getPosts";

export default async function BlogPage() {
   const posts = await getAllpost();  
   const categories = [...new Set(posts.map(post => post.category))]    
   console.log('categories?',categories);
   return(
        <section>
            <FilterCategory posts={posts} categories={categories}/>
            <AllPosts/>
        </section>
     )
}