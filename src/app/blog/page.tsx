import AllPosts from "@/components/Blog/AllPosts";
import FilterCategory from "@/components/Blog/FilterCategory";
import TitleTexts from "@/components/TitleTexts";
import { getAllpost } from "@/service/getPosts";
import { getAllPosts } from "@/service/getPostsNew";

export default async function BlogPage() {
  const posts = await getAllPosts();
  
  const combinedTags = posts.reduce((ac,post) => {
    return ac.concat(post.tags)
  },[]) as string[]
  
  const tags = [...new Set(combinedTags)];

  return (
    <div className="flex flex-col gap-10">
      <TitleTexts
        title="Blog"
        subTitle="클릭시 해당 시리즈에 대한 포스트를 보실수 있습니다."
      />
      <FilterCategory posts={posts} tags={tags} />
    </div>
  );
}
