import {
  getPost,
  getPostData
} from "@/service/getPostsNew";
import CustomMdx from "@/lips/CustomMdx";
import Giscus from "@/components/Blog/Giscus";
import { Props } from "./page";


export default async function PostPage({ params }: Props) {
  const { slugs } = params;
  // console.log('slugs', slugs);

  const post = await getPost(slugs);
  const { title, date, content } = post;

  const postTest = await getPostData(slugs);
  const { prev, next } = postTest;

  console.log('postTest', postTest);
  return (
    <div className="my-10">
      <div className="flex flex-col items-center gap-4">
        <p className="text-4xl font-bold">{title}</p>
        <p>{date}</p>
      </div>
      <div className="dark:prose-dark prose my-8 max-w-full">
        <CustomMdx source={content} />
        <Giscus />
        {prev && <div>{prev.title}</div>}
        {next && <div>{next.title}</div>}
      </div>
    </div>
  );
}
