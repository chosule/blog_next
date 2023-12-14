import { getAllPosts, getPosts, parsePosts } from "@/service/getPostsNew";
import fs  from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";

export type Slugs = {
    slugs:string[];
}


const BASE_PATH = '/posts';
const POST_PATH = path.join(process.cwd(),BASE_PATH);

//경로를 설정해줌 
// export async function generateStaticParams () {
//     const files = fs.readdirSync(path.join(process.cwd(),'posts'))
//     const paths = files.map(fileName =>({
//         slug: fileName.replace('.mdx','')
//     }))
//     console.log('path',paths) //결과 { slug: '2023' }, { slug: 'blog' }
//     return paths
// }

// function getPosts({slug}:{slug:string}){

//     const markdownFile = fs.readFileSync(path.join('blogs', slug + '.mdx'), 'utf-8');
//     // console.log('markdownFile',markdownFile)
//     const {data: fontMatter, content} = matter(markdownFile)

//     return{
//         fontMatter,
//         slug,
//         content
//     }
// }

export async function generateStaticParams() {
    const posts = await getAllPosts(); 
    const slugs =  posts.map((post)=>({
        slug: post.slug 
    }));
    return slugs;
}


export default async function Page({params}:any){
    const {slugs}:Slugs = params;
    const test = await getAllPosts();
    console.log('getAllPosts',test)
    const markdownFile = await parsePosts(params);
    console.log('markdown',markdownFile)
    // const markdownFile = fs.readFileSync(slug,"utf-8")
    return(
        <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate">
            {/* <h1>{props.fontMatter.title}</h1>
            <h1>{props.fontMatter.date}</h1>
            <h1>{props.fontMatter.description}</h1>
            <MDXRemote source={props.content}/> */}
            {/* {params.slug} */}
            <h1>{markdownFile?.fontMatter.title}</h1>
            {slugs}
        </article>
    )
}