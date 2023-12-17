import {
  getAllPosts,
  getAllPostsPath,
  getPost,
  parsePosts,
} from "@/service/getPostsNew";
import { MDXRemote } from "next-mdx-remote/rsc";
import { redirect } from "next/navigation";

export type Slugs = {
  slugs: string[];
};

export default async function Page({ mdx }: any) {
  // const { slugs }: Slugs = params;
  // console.log("현재해당 slugs", slugs);

  // const getPostTest = await getPost(slugs);
  // console.log("getPost", getPostTest);

  const getAllPost = await getAllPosts();
  console.log("getAllposts", getAllPost);

  const getAllPostsPaths = await getAllPostsPath();
  // console.log("getAllPostsPath", getAllPostsPaths);

  // const parsePost = parsePosts(`${getPostTest?.slug}.mdx`);
  // console.log("parsePost", parsePost);

  // if(!markdownFile){
  //     redirect('/posts');
  // }
  return (
    <article className="prose prose-sm prose-slate md:prose-base lg:prose-lg">
      {/* <h1>{markdownFile?.title}</h1> */}
      {/* <h3>날짜 : {markdownFile?.date}</h3> */}
      <div>
        <MDXRemote {...mdx} />
      </div>
    </article>
  );
}
export async function generateStaticParams() {
  const posts = await getAllPostsPath();
  const slugs = posts.map((post) => ({
    slug: post.slug,
  }));
  return slugs;
}
