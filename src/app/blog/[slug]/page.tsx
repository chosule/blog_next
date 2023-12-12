import { getAllpost, getPostData } from "@/service/getPosts";
import serializeMdx from "@/service/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { redirect } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  if (!post) {
    redirect("/blog");
  }
  const mdxSource = await serializeMdx(post.content);
  if (post) {
    console.log("post??", post);
  }

  return (
    <div>
      <div className="bg-orange-500">{post.title}</div>
      <div className="bg-orange-500">
        <MDXRemote {...mdxSource} />
        {/* {post.content} */}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllpost();
  return posts.map((post) => ({
    slug: post.title,
  }));
}
