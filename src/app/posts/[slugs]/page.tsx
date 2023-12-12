import getAllPosts from "@/libs/post"
import serializeMdx from "@/service/mdx";
import { MDXRemote } from "next-mdx-remote";



export async function PostsPage({params}) {
    const {slugs} = params as {slugs: string[]};  
    const slug = `/posts/${[...slugs].join('/')}`;
    
    console.log('slugs',slug);
    const posts = await getAllPosts();
    
    const post = posts.find((v) => v.slug == slug);
    console.log('posts?', post)
    // const mdx = await serializeMdx(post.content);
    return(
        <div>
            {/* <MDXRemote {...mdx}/> */}
        </div>
     )
}

// export const generateStaticParams = async() =>{
//     const posts = await getAllPosts();
//     return posts.map((post) => ({
//         params:{slug : post.slug}
//     }))
// }

export default PostsPage;