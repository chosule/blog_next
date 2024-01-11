"use client";

import { Post } from "@/service/getPostsNew";
import { useState } from "react";
import PostsGrid from "../Post/PostsGrid";
import Categories from "./Categories";
import Title from "../Title";

type Props = {
  posts: Post[];
  tags: string[];
};

const ALLPOSTS = "all Post";

export default function FilterCategory({ posts, tags }:Props ) {
  const [selected, setSelected] = useState(ALLPOSTS);
  const filtered =
    selected === ALLPOSTS
      ? posts
      : posts.filter((post) => post.tags[0] === selected);

  return (
    <section className="flex flex-col gap-8">
      <article className="flex flex-col gap-5">
        <Title subTitle={`#Tags`}/>
        <Categories
          categories={[ALLPOSTS, ...tags]}
          selected={selected}
          onClick={(selected) => setSelected(selected)}
        />
      </article>
      <article className="flex flex-col gap-5">
        <Title subTitle={`📃 ${selected}`}/>
        <PostsGrid posts={filtered}/>
      </article>
    </section>
  );
}
