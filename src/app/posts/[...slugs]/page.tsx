import {
  getAllPostsPath,
  getPost,
  getPostData,
} from "@/service/getPostsNew";
import Mdx from "@/lips/Mdx";
import Giscus from "@/components/Blog/Giscus";
import AdjacentPostCard from "@/components/Blog/AdjacentPostCard";
import { Metadata } from "next";

export type Props = {
  params: {
    slugs: string[];
  };
};

export async function generateMetadata({ params }: Props):Promise<Metadata> {
  const slugs = params.slugs;
  // const slug = `${slugs.join("/")}`;
  const post = await getPost(slugs);
  const {description,title,image} = post;
  return {
    title,
    description,
    openGraph:{
      title:`${title}`,
      description:`${description}`,
      images:[`${image}`]
    }
  };
}

export default async function PostPage({ params }: Props) {
  const slugs  = params.slugs;
  const post = await getPost(slugs);
  const {title, date, content} = post;
  
  const postPrevNext = await getPostData(slugs);
  const {prev, next} = postPrevNext;


  return (
    <div className="my-10">
      <div className="flex flex-col items-center gap-4">
        <p className="text-4xl font-bold pre">{title}</p>
        <p className="suit">{date}</p>
      </div>
      <div className="dark:prose-dark prose my-8 max-w-full">
        <Mdx source={content}/>
        <Giscus/>
        {/*  */}
        <div className="flex justify-between mt-4 gap-6 flex-col sm:mt-8 sm:flex-row">
          {prev && <AdjacentPostCard post={prev} type="prev"/>}
          {next && <AdjacentPostCard post={next} type="next"/>}
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
