import FilterCategory from "@/components/Blog/FilterCategory";
import Text from "@/components/Text";
import Title from "@/components/Title";
import { getAllPosts } from "@/service/getPostsNew";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts chosule",
  description: "블로그 post 입니다.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  const combinedTags = posts.reduce((ac: string[], post) => {
    return ac.concat(post.titlelist);
  }, []) as string[];

  const titleList = [...new Set(combinedTags)];
  console.log("titleList", titleList);
  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-col gap-3">
        <Title>Blog</Title>
        <Text>클릭시 해당 시리즈에 대한 포스트를 보실수 있습니다.</Text>
      </div>
      <FilterCategory posts={posts} titleList={titleList} />
    </div>
  );
}
