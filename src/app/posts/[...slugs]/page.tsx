import {
  getAllPosts,
  getAllPostsPath,
  getPost,
  parsePosts,
} from "@/service/getPostsNew";
import { MDXRemote } from "next-mdx-remote/rsc";
import { redirect } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";
import serializeMdx from "@/lips/mdx";
import { getPostData } from "@/service/getPosts";

export type Props = {
  params: {
    slugs: string[];
  };
};

export function generateMetadata({ params }: Props) {
  const slugs = params.slugs;
  const slug = `${slugs.join("/")}`;
  return {
    title: `${slug} 기록`,
  };
}

export default async function PostPage({ params }: Props) {
  const { slugs } = params;
console.log('slugs?',slugs)
  const post = await getPost(slugs);
  console.log('post??',post)
  const mdx = await serializeMdx(post?.content);

  // const test = await getPostData(slugs);

  // console.log('test',test)
  return (
    <>
      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold">{post?.title}</p>
        <p>{post?.date}</p>
      </div>
      <div className="dark:prose-dark prose max-w-full">
        {/* <MDXRemote source={post.content} /> */}
        {/* <MDXRemote {...mdx} /> */}
      </div>
    </>
  );
}
export async function generateStaticParams() {
  const posts = await getAllPostsPath();
  const slugs = posts.map((post) => ({
    slug: post.slug,
  }));
  return slugs;
}
