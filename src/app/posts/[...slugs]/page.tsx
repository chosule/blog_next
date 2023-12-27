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

  const post = await getPost(slugs);

  if (!post) {
    redirect("/posts");
  }

  const mdx = await serializeMdx(post.content);

  return (
    <>
      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold">{post.title}</p>
        <p>{post.date}</p>
      </div>
      <div className="dark:prose-dark prose max-w-full">
        <MDXRemote source={post.content} />
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
