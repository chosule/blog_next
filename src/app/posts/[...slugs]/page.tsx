import {
  getAllPosts,
  getAllPostsPath,
  getPost,
  parsePosts,
} from "@/service/getPostsNew";
import { MDXRemote } from "next-mdx-remote/rsc";
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
  // const mdx = await serializeMdx(post?.content);
  console.log('post',post)
  return (
    <div className="my-10">
      <div className="flex flex-col items-center gap-4">
        <p className="text-4xl font-bold">{post?.title}</p>
        <p>{post?.date}</p>
      </div>
      <div className="dark:prose-dark prose max-w-full my-8">
        {/* <MDXRemote source={post.content} /> */}
        <MDXRemote {...post.compiledSource} />
      </div>
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
