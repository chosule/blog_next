import fs  from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";

const BASE_PATH = '/posts';
const POST_PATH = path.join(process.cwd(),BASE_PATH);


export async function getAllPosts(){
    const postPaths = sync(`${POST_PATH}/**/*.mdx`);
    // console.log('postPath',postPaths)
    const paths = postPaths.map((postPath) => {
        const startIndx = postPath.indexOf(BASE_PATH);
        return{
            slug:postPath.slice(startIndx).replace(/\\/g, '/').replace('.mdx','')
            // slug:postPath.replace('.mdx','')
        }
    })
    // 결과
    //  { slug: '/posts/blog' },
    //{ slug: '/posts/2023/11/test' },
    //{ slug: '/posts/2023/11/blog' }
    return paths;
}


export async function getPosts(fileName){
    const filePath = await getAllPosts();
    const {slugs} = fileName;
    const slug = `posts/${[...slugs].join('/')}`
    const postsFind = filePath.find((post) => post.slug === slug);
    
    return postsFind;
}


export async function parsePosts(fileName){
    try{
        const postPath = await getPosts(fileName); // {slug: '/posts/2023/11/test'}
        // const postPathFileName = postPath.slug
        const markdownFile = fs.readFileSync(postPath, "utf-8");
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