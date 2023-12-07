import { getAllpost } from "@/service/getPosts"
import { redirect } from "next/navigation";

type Props ={

}

export default async function PostPage({params:{slug}}:{slug:Props}){
   console.log('slug',slug)
   const post = await getAllpost(slug);
   if(!post){
      redirect('/blog');
   }
   return(
      <div>{post?.name}</div>
   )
}


export async function generateStaticParams() {
   const posts = await getAllpost();
   return posts.map((post) => ({
     slug: post.title,
   }))
 }