import {
  getAllPosts,
  getAllPostsPath,
  getPost,
  parsePosts,
} from "@/service/getPostsNew";
import { MDXRemote } from "next-mdx-remote/rsc";
import serializeMdx from "@/lips/mdx";
import parser from "@/lips/parser";
import CustomMdx from "@/lips/CustomMdx";

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
  // console.log('post',post)
  // console.log("mdxSource", mdxSource);
  // console.log('slugs?',slugs)
  const parserTest = await parser(slugs);
  // console.log('parserTest',parserTest)

  const mdxSource = await serializeMdx(post?.content);
  const getPosts = await getPost(slugs);
  // console.log('getPosts',getPosts)
  // console.log('mdxSource',mdxSource)
  return (
    <div className="my-10">
      <div className="flex flex-col items-center gap-4">
        <p className="text-4xl font-bold">{post?.title}</p>
        <p>{post?.date}</p>
      </div>
      <div className="dark:prose-dark prose my-8 max-w-full">
        {/* <MDXRemote source={post.content} /> */}
        {/* <MDXRemote {...parserTest} /> */}
        {/* <CustomMdx source={`:::main{#readme}
          Lorem:br
          ipsum.

          ::hr{.red}

          A :i[lovely] language know as :abbr[HTML]{title="HyperText Markup Language"}.

          :::`}/> */}
        <CustomMdx source={post.content}/>
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
