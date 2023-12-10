import AllPosts from "@/components/Blog/AllPosts";
import FilterCategory from "@/components/Blog/FilterCategory";
import TitleTexts from "@/components/TitleTexts";
import { getAllpost } from "@/service/getPosts";

export default async function BlogPage() {
  const posts = await getAllpost();
  const categories = [...new Set(posts.map((post) => post.category))];
  console.log("categories?", categories);
  return (
    <div className="my-9">
      <TitleTexts
        title="Blog"
        subTitle="클릭시 해당 시리즈에 대한 포스트를 보실수 있습니다."
      />
      <FilterCategory posts={posts} categories={categories} />
      <AllPosts />
    </div>
  );
}
