"use client";

import { Post } from "@/service/getPostsNew";
import { useState } from "react";
import PostsGrid from "../Post/PostsGrid";
import Categories from "./Categories";

type Props = {
  posts: Post[];
  tags: string[];
};

const ALLPOSTS = "All Post";

export default function FilterCategory({ posts, tags }:Props ) {
  const [selected, setSelected] = useState(ALLPOSTS);
  const filtered =
    selected === ALLPOSTS
      ? posts
      : posts.filter((post) => post.tags[0] === selected);

  return (
    <section className="grid grid-cols-4 gap-3">
      <article  className="col-span-3">
        <h1 className="text-2xl font-black italic mb-7">{selected}</h1>
        <PostsGrid posts={filtered} />
      </article>
      <article className="col-span-1 justify-self-end">
        <h1 className="text-2xl font-black italic mb-7">Tags</h1>
        <Categories
          categories={[ALLPOSTS, ...tags]}
          selected={selected}
          onClick={(selected) => setSelected(selected)}
        />
      </article>
    </section>
  );
}
