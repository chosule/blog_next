import { getPost, getPosts } from "@/service/getPosts"
import { redirect } from "next/navigation";


export default async function PostPage({params:{slug}}){
   console.log('slug',slug)
   const post = await getPost(slug);
   if(!post){
      redirect('/blog');
   }
   return(
      <div>{post?.name}</div>
   )
}


export async function generateStaticParams() {
   const posts = await getPosts();
   return posts.map((post) => ({
     slug: post.name,
   }))
 }