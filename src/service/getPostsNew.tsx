import fs  from "fs";
import { globSync, sync } from "glob";
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

// 모든파일들을 가져와서 gray-matter로 파싱 
export async function getAllPosts() {
    const postPaths = sync(`${POST_PATH}/**/*.mdx`);
    console.log('postPaths?',postPaths)
    const allPosts = await Promise.all(
        //parsePosts가 비동기일필요가 없어서 수정필요
        postPaths.map(async(path) =>{
            console.log('path?',path)
            const pathString = path.toString();
            const allPost = await(parsePosts(pathString));
            return allPost;
        })
    ) 
    return allPosts;
    // return posts;
    // return postPaths.reduce((ac,postPath) =>{
    //     const post = await parsePosts(postPath);
    //     if(!post) return ac;
    //     return [...ac,post];
    // },[])
}



// 모든 파일을 읽어와서 .mdx을 없애는 프로그래밍
export async function getAllPostsPath():Promise<Slugs[]>{
    try {
        const postPaths = globSync(`${POST_PATH}/**/*.mdx`);
    
        return postPaths.map(filePath => {
          let relativePath = path.relative(POST_PATH, filePath);
          relativePath = relativePath.replace(new RegExp('\\' + path.sep, 'g'), '/'); 
          relativePath = relativePath.replace(/\.mdx$/, ''); 
          return {
            slug: `posts/${relativePath}`,
          };
        });
      } catch (error) {
        console.error('경로가 잘못되었습니다.', error);
        return [];
      }
}


//해당되는 포스트만 가져옴 
export async function getPost(params:any):Promise<Slugs | undefined>{
    const filePaths = await getAllPostsPath();
 
    const {slugs}  = params;
    const slug = `posts/${slugs.join('/')}`
    // console.log('slug??????????????', slug)

    const postsFind = filePaths.find((filePath) => filePath.slug === slug);
    return postsFind;

    // 반환예시
    // {slug:'posts/2023/11/test'}
}


export function parsePosts(postPaths:string){
    try{
        // const postPath = await getPosts(postPaths); 
        // {slug: 'posts/2023/11/test'}
        // const slug = postPath?.slug
        const markdownFile = fs.readFileSync(`${postPaths}`,{encoding:'utf8'});
        // console.log('markdownFile???',markdownFile)
        const {content, data} = matter(markdownFile);
        const grayMatter = data as PostMatter;
        console.log('grayMatter?', grayMatter);
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