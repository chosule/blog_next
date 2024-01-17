import { getAllPostsPath, getPost, getPostData } from "@/service/getPostsNew";
import Mdx from "@/lips/Mdx";
import Giscus from "@/components/Blog/Giscus";
import AdjacentPostCard from "@/components/Blog/AdjacentPostCard";
import { Metadata } from "next";
import Title from "@/components/Title";

export type Props = {
  params: {
    slugs: string[];
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slugs = params.slugs;
  // const slug = `${slugs.join("/")}`;
  const post = await getPost(slugs);
  const { description, title, image } = post;
  return {
    metadataBase: new URL("http://localhost:3000"),
    title,
    description,
    openGraph: {
      title: `${title}`,
      description: `${description}`,
      images: [`${image}`],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const slugs = params.slugs;
  const post = await getPost(slugs);
  const { title, date, content } = post;

  const postPrevNext = await getPostData(slugs);
  const { prev, next } = postPrevNext;

  return (
    <div className="my-10">
      <div className="flex flex-col items-center gap-4">
        <Title>{title}</Title>
        <p>{date}</p>
      </div>
      <div className="dark:prose-dark prose my-8 max-w-full">
        <Mdx source={content} />
        <Giscus />
        {/*  */}
        <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row">
          {prev && <AdjacentPostCard post={prev} type="prev" />}
          {next && <AdjacentPostCard post={next} type="next" />}
        </div>
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
