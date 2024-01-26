"use client";

import { Post } from "@/service/getPostsNew";
import { useState } from "react";
import PostsGrid from "../Post/PostsGrid";
import Categories from "./Categories";
import SubTitle from "../SubTitle";
import SeriesList from "./SeriesList";

import React from "react";
import filteredPostsContent from "@/utils/filteredPostsContent";



const ALLPOSTS = "all Post";



export function FilterCategory({ posts, tags }:Props ) {
  const [selected, setSelected] = useState(ALLPOSTS);

  const filterdTags = filteredPostsContent( posts, selected, 'tags');
  return (
    <section className="flex gap-10">
      <article className="flex flex-col gap-5">
        <SubTitle>#Tags</SubTitle>
        <Categories
          categories={[ALLPOSTS, ...tags]}
          selected={selected}
          onClick={(selected) => setSelected(selected)}
          />
      </article>
      <div>
        {/* <article>
          <SeriesList/>
        </article> */}
        <article className="flex flex-col gap-8">
          <SubTitle>📃 {selected}</SubTitle>
          <PostsGrid posts={filterdTags}/>
        </article>
      </div>
    </section>
  );
}
export default FilterCategory