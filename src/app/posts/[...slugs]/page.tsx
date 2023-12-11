import { getAllposts } from "@/service/getPosts"
import serializeMdx from "@/service/mdx";
import { GetStaticPaths, GetStaticProps } from "next"
import { MDXRemote } from "next-mdx-remote";


export const getStaticPaths:GetStaticPaths = () =>{
    const posts = getAllposts();
    return{
        paths: posts.map((post) => post.slug),
        fallback:'blocking'
    }
}

export const getStaticProps:GetStaticProps = async({params}) =>{
    const {slugs} = params as {slugs:string[]};
    const slug = [...slugs].join('/');    
    const post = getAllposts().find((post) => post.slug === slug);
    const mdx = await serializeMdx(post.content);
    if(!post){
        return{
            notFound: true
        }
    }

    return{
        props:{
            mdx
        }
    }
}

export default function PostsPage({slug}:{slug:string}){
    return <div>
        <MDXRemote {...mdx}/>
    </div>
}

