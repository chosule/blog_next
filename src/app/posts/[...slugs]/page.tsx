import { getAllPosts, getAllPostsPath, getPosts, parsePosts } from "@/service/getPostsNew";
import { redirect } from "next/navigation";

export type Slugs = {
    slugs:string[];
}

export default async function Page({params}:any){
    const {slugs}:Slugs = params;
    const test = await getAllPostsPath();


    const postsFind = await getPosts(params);
 
 
    // const allPsth = await getAllPosts();
    // console.log('allpath',allPsth)

    // const markdownFile = await parsePosts(params);
    
    // if(!markdownFile){
    //     redirect('/posts');
    // }
    return(
        <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate">
            {/* <h1>{markdownFile?.fontMatter.title}</h1> */}
            {slugs}
        </article>
    )
}
export async function generateStaticParams() {
    const posts = await getAllPostsPath(); 
    const slugs =  posts.map((post)=>({
        slug: post.slug 
    }));
    return slugs;
}


