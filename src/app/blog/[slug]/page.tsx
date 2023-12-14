import { getAllpost, getPostData } from "@/service/getPosts";
import { redirect } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  console.log('slug',slug)
  if (!post) {
    redirect("/blog");
  }

  return (
    <div>
      <div className="bg-orange-500">{post.title}</div>
      <div className="bg-orange-500">
        {post.content}
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
