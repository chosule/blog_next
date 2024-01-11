import AllPosts from "@/components/Blog/AllPosts";
import FilterCategory from "@/components/Blog/FilterCategory";
import Text from "@/components/Text";
import Title from "@/components/Title";
import { getAllPosts } from "@/service/getPostsNew";

export default async function BlogPage() {
  const posts = await getAllPosts();
  
  const combinedTags = posts.reduce((ac:string[],post) => {
    return ac.concat(post.tags)
  },[]) as string[]
  
  const tags = [...new Set(combinedTags)];

  return (
    <div className="flex flex-col gap-10">
      <Title>Blog</Title>
      <Text>클릭시 해당 시리즈에 대한 포스트를 보실수 있습니다.</Text>
      <FilterCategory posts={posts} tags={tags} />
    </div>
  );
}
