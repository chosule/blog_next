import {
  getAllPosts,
  getAllPostsPath,
  getPost,
  parsePosts,
} from "@/service/getPostsNew";
import { MDXRemote } from "next-mdx-remote/rsc";
import { redirect } from "next/navigation";
import { serialize } from 'next-mdx-remote/serialize'
import { serializeMax } from "@/lips/mdx";
import serializeMdx from "@/service/mdx";


export type Props = {
    params:{
        slugs: string[];
    }
};

export function generateMetadata({ params }:Props) {
    const slugs = params.slugs;
    const slug = `${slugs.join('/')}`
    return {
      title: `${slug} 기록`,
    };
  }
  

export default async function Page({ params }: Props) {
    const { slugs } = params;
  // console.log("현재해당 slugs", slugs);
  const post = await getPost(slugs);
  if(!post){
    redirect('/posts')
  }
  const mdx = await serializeMdx(post.content)

  return (
    <div className="prose dark:prose-dark">
        <MDXRemote source={post.content}/>
        {/* <MDXRemote {...mdx}  components={{h1:Heading}}/> */}
    </div>
  );
}
export async function generateStaticParams() {
  const posts = await getAllPostsPath();
  const slugs = posts.map((post) => ({
    slug: post.slug,
  }));
  return slugs;
}

