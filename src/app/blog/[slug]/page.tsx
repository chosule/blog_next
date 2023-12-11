import { getAllpost, getPostData } from "@/service/getPosts"
import { MDXRemote } from "next-mdx-remote";
import { redirect } from "next/navigation";

type Props = {
   params:{
      slug: string
   }
}

export default async function PostPage({params:{slug}}:Props){
   const post = await getPostData(slug);
   if(!post){
      redirect('/blog');
   }
 
   return(
      <div>
         <div>{post.title}</div>
         <div className="prose">
            <MDXRemote {...mdx}/>
            {/* <MDXRemote>{post.content}</MDX> */}
         </div>
      </div>
   )
}


export async function generateStaticParams() {
   const posts = await getAllpost();
   return posts.map((post) => ({
     slug: post.title,
   }))
 }