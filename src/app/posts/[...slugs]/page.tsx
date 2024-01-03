import {
  getAllPostsPath,
  getPost,
  getPostData,
} from "@/service/getPostsNew";
import CustomMdx from "@/lips/CustomMdx";
import Giscus from "@/components/Blog/Giscus";
import AdjacentPostCard from "@/components/Blog/AdjacentPostCard";

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
  const {title, date, content} = post;
  
  const postTest = await getPostData(slugs);
  const {prev, next} = postTest;
  return (
    <div className="my-10">
      <div className="flex flex-col items-center gap-4">
        <p className="text-4xl font-bold">{title}</p>
        <p>{date}</p>
      </div>
      <div className="dark:prose-dark prose my-8 max-w-full">
        <CustomMdx source={content}/>
        <Giscus/>
        {/*  */}
        <div className="flex justify-between">
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
