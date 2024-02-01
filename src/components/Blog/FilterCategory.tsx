"use client";

import { Post } from "@/service/getPostsNew";
import { useState } from "react";
import PostsGrid from "../Post/PostsGrid";
import Categories from "./Categories";
import SubTitle from "../SubTitle";
import React from "react";
import filteredPostsContent from "@/utils/filteredPostsContent";
import SeriesCategory from "./SeriesCategory";

type Props = {
  posts: Post[];
  tags: string[];
  titleList: string[];
};

const ALLPOSTS = "all Post";

export function FilterCategory({ posts, tags, titleList }: Props) {
  const [selected, setSelected] = useState(ALLPOSTS);

  const filterdTags = filteredPostsContent(posts, selected, "tags");

  const filterTitleList = filteredPostsContent(posts, selected, "titlelist");

  return (
    <section className="flex flex-col gap-14">
      <article className="">
        <SeriesCategory
          categories={[ALLPOSTS, ...titleList]}
          onClick={(selected) => setSelected(selected)}
          selected={selected}
        />
      </article>
      <div className="grid grid-cols-[150px,1fr] gap-6">
        <article className="flex flex-col gap-5">
          <SubTitle>#Tags</SubTitle>
          <Categories
            categories={[ALLPOSTS, ...tags]}
            selected={selected}
            onClick={(selected) => setSelected(selected)}
          />
        </article>
        <article className="flex flex-col gap-8">
          <SubTitle>📃 {selected}</SubTitle>
          <PostsGrid TagsPosts={filterdTags} titleListPosts={filterTitleList} />
        </article>
      </div>
    </section>
  );
}
export default FilterCategory;
