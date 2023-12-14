import { Slugs } from "@/app/posts/[...slugs]/page";
import fs  from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";

type Slugs = {
    slug:string
}

const BASE_PATH = '/posts';
const POST_PATH = path.join(process.cwd(),BASE_PATH);


export async function getAllPosts():Promise<Slugs[]>{
    const postPaths = sync(`${POST_PATH}/**/*.mdx`);
    const paths = postPaths.map((postPath) => {
        // const startIndx = postPath.indexOf(BASE_PATH);
        return{
            slug: postPath.replace(/\\/g, '/').replace('.mdx','')
            // slug:postPath.replace('.mdx','')
        }
    })
    // 결과
    //  { slug: '/posts/blog' },
    //{ slug: '/posts/2023/11/test' },
    //{ slug: '/posts/2023/11/blog' }
    return paths;
}


export async function getPosts(params:any):Promise<Slugs | undefined>{
    const filePaths = await getAllPosts();
    const {slugs}  = params ;
    const slug = `posts/${slugs.join('/')}`
    const postsFind = filePaths.find((filePath) => filePath.slug === slug);
    return postsFind;
}


export async function parsePosts(fileName:string){
    try{
        const postPath = await getPosts(fileName); // {slug: 'posts/2023/11/test'}
        const postPathFileSlug = postPath.slug
        const markdownFile = fs.readFileSync(`${postPathFileSlug}.mdx`, "utf-8");
        const {data:fontMatter,content} = matter(markdownFile);
        return{
            fontMatter,
            fileName,
            content
        }
    }catch(e){
        console.error(e)
    }

}