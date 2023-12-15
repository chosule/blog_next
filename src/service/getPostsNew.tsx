import fs, { promises }  from "fs";
import { globSync, sync } from "glob";
import matter from "gray-matter";
import path from "path";
import { CiGlass } from "react-icons/ci";

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


export async function getAllPosts() {
    const postPaths = sync(`${POST_PATH}/**/*.mdx`);
    console.log('sync 포스트패스',postPaths)
    const test =  postPaths.map(async(postPath) =>{
        return await(parsePosts(postPath))
    })
    return test;
    // return posts;
    // return postPaths.reduce((ac,postPath) =>{
    //     const post = await parsePosts(postPath);
    //     if(!post) return ac;
    //     return [...ac,post];
    // },[])
}




export async function getAllPostsPath():Promise<Slugs[]>{
    try {
        const postPaths = globSync(`${POST_PATH}/**/*.mdx`);
    
        return postPaths.map(filePath => {
          // 상대 경로를 얻고, 필요한 문자열 변환을 수행합니다.
          let relativePath = path.relative(POST_PATH, filePath);
          relativePath = relativePath.replace(new RegExp('\\' + path.sep, 'g'), '/'); // 플랫폼 독립적인 경로 구분자로 변환
          relativePath = relativePath.replace(/\.mdx$/, ''); // 확장자 제거
    
          return {
            slug: relativePath,
          };
        });
      } catch (error) {
        console.error('Error while getting all posts:', error);
        return [];
      }
}


export async function getPosts(params:any):Promise<Slugs | undefined>{
    const filePaths = await getAllPostsPath();
 
    const {slugs}  = params;
   
    const slug = `posts/${slugs.join('/')}`

    console.log('filePaths', filePaths)
    console.log('slug', slug)


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