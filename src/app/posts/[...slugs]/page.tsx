import { getAllPosts, getAllPostsPath, getPost, parsePosts } from "@/service/getPostsNew";
import { redirect } from "next/navigation";

export type Slugs = {
    slugs:string[];
}

export default async function Page({params}:any){
    const {slugs}:Slugs = params;
    // console.log('현재해당 slugs', slugs);

    const getPostTest = await getPost(params);
    // console.log('getPost', getPostTest)
 

    const getAllPost = await getAllPosts();
    // console.log('getAllposts',getAllPost)

    const getAllPostsPaths = await getAllPostsPath();
    // console.log('getAllPostsPath', getAllPostsPaths)

    // todo
    // getPost에는 현재 해당되는 페이지 파일 경로만 담겨있음 .mdx가 안붙어있음
    // {slug : 'posts/2023/11/test'}
    // 경로 부분만 mdx 파일 붙여서 데이터를 파싱해야함
    const markdownFile =  parsePosts(`${getPostTest?.slug}.mdx`);
    console.log('markdownFile', markdownFile);







    // console.log('markdownFile',markdownFile);


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


