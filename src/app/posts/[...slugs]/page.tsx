import getAllPosts from "@/libs/post";
import serializeMdx from "@/service/mdx";
import { MDXRemote } from "next-mdx-remote";

export async function PostsPage({ params }) {
  const { slugs } = params as { slugs: string[] };
  const slug = `/posts/${[...slugs].join("/")}`;
  const posts = await getAllPosts();
  console.log("posts?", posts);

  console.log("slug", slug); // /posts/2022/test
  console.log("slugs", slugs); // ['2022','test']

  const post = posts.find((v) => v.slug == slug);

  return (
    <div>
      {/* <MDXRemote {...mdx}/> */}
      {slugs}
    </div>
  );
}

export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  console.log("posts", posts);
  return posts.map((post) => ({
    params: { slug: post.slug },
  }));
};

export default PostsPage;
