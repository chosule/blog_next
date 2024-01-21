"use client";

import { Post } from "@/service/getPostsNew";
import { useState } from "react";
import PostsGrid from "../Post/PostsGrid";
import Categories from "./Categories";
import SubTitle from "../SubTitle";

type Props = {
  posts: Post[];
  titleList: string[];
};

const ALLPOSTS = "all Post";

export default function FilterCategory({ posts, titleList }: Props) {
  const [selected, setSelected] = useState(ALLPOSTS);
  const filtered =
    selected === ALLPOSTS
      ? posts
      : posts.filter((post) => post.titlelist === selected);

  return (
    <section className="flex flex-col gap-10">
      <article className="flex flex-col gap-5">
        <SubTitle>#Tags</SubTitle>
        <Categories
          categories={[ALLPOSTS, ...titleList]}
          selected={selected}
          onClick={(selected) => setSelected(selected)}
        />
      </article>
      <article className="flex flex-col gap-8">
        <SubTitle>📃 {selected}</SubTitle>
        <PostsGrid posts={filtered} />
      </article>
    </section>
  );
}
