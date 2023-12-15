import fs, { promises }  from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import path from "path";

type Slugs = {
    slug:string
}

type PostMatter ={
    title:string;
    description:string;
    tags: string[];
    draft?:boolean;
    date:string;
}
const BASE_PATH = '/posts';
const POST_PATH = path.join(process.cwd(),BASE_PATH);
console.log('postPath?',POST_PATH)


export async function getAllPosts() {
    const postPaths = sync(`${POST_PATH}/**/*.mdx`);
    console.log('sync 포스트패스',postPaths)
    const test =  postPaths.map(async(postPath) =>{
        return await(parsePosts(postPath))
    })
    console.log('getAllPosts',getAllPosts);
    return test;
    // return posts;
    // return postPaths.reduce((ac,postPath) =>{
    //     const post = await parsePosts(postPath);
    //     if(!post) return ac;
    //     return [...ac,post];
    // },[])
}




export async function getAllPostsPath():Promise<Slugs[]>{
    const postPaths = sync(`${POST_PATH}/**/*.mdx`);
    console.log('테스트',postPaths);
    const paths = postPaths.map((path) => {
        // const startIndx = postPath.indexOf(BASE_PATH);
        return{
            // slug: path.indexOf(BASE_PATH)
            slug:path.replace('.mdx','')
        }
    })
    //  { slug: '/posts/blog' },
    //  { slug: '/posts/2023/11/test' },
    //  { slug: '/posts/2023/11/blog' }
    return paths;
}


export async function getPosts(params:any):Promise<Slugs | undefined>{
    const filePaths = await getAllPostsPath();
    const {slugs}  = params ;
    const slug = `posts/${slugs.join('/')}`
    const postsFind = filePaths.find((filePath) => filePath.slug === slug);
    return postsFind;
}


export async function parsePosts(postPaths:string){
    try{
        // const postPath = await getPosts(fileName); // {slug: 'posts/2023/11/test'}
        const allFile = fs.readFileSync(postPaths,{encoding:'utf8'});
        const {content, data} = matter(allFile);
        const grayMatter = data as PostMatter;
        return{
            ...grayMatter,
            content,

        }
        // const postPathFileSlug = postPath.slug
        // const markdownFile = fs.readFileSync(`${postPathFileSlug}.mdx`, "utf-8");
        // const {data:fontMatter,content} = matter(markdownFile);
        // return{
        //     fontMatter,
        //     fileName,
        //     content
        // }
    }catch(e){
        console.error(e)
    }

}