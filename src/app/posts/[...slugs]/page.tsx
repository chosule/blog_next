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
  // console.log("mdxSource", mdxSource);
  const mdxSource = await serializeMdx(post?.content);
  // console.log("post", mdx);
  return (
    <div className="my-10">
      <div className="flex flex-col items-center gap-4">
        <p className="text-4xl font-bold">{post?.title}</p>
        <p>{post?.date}</p>
      </div>
      <div className="dark:prose-dark prose my-8 max-w-full">
        {/* <MDXRemote source={post.content} /> */}
        <MDXRemote source={mdxSource} />
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
