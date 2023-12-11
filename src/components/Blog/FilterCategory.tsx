"use client";

import { Posts } from "@/service/getPosts";
import { useState } from "react";
import PostsGrid from "../Post/PostsGrid";
import Categories from "./Categories";

type Props = {
  posts: Posts[];
  categories: string[];
};

const ALLPOSTS = "all post";

export default function FilterCategory({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALLPOSTS);
  //유저가 클릭한 category이름과 맞는 포스트만 보여줘야함

  const filtered =
    selected === ALLPOSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section>
      <Categories
        categories={[ALLPOSTS, ...categories]}
        selected={selected}
        onClick={(selected) => setSelected(selected)}
      />
      <h1 className="text-2xl font-black italic mb-7">{selected}</h1>
      <PostsGrid posts={filtered} />
    </section>
  );
}
