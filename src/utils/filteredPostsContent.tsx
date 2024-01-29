import { Post } from "@/service/getPostsNew";

type Props = {
  posts: Post[];
  selected: string;
  filterKey: keyof Post;
};

const ALLPOSTS = "all Post";

const filteredPostsContent = (
  posts: Post[],
  selected: string,
  filterKey: keyof Post
) => {
  return selected === ALLPOSTS
    ? posts
    : posts.filter((post) => {
        const filterValue = post[filterKey];
        if (Array.isArray(filterValue)) {
          const newValue = filterValue.map((item) => [item]);
          return newValue.some((item) => item[0] === selected);
        } else {
          return filterValue === selected;
        }
      });
};

export default filteredPostsContent;
