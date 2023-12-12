import fs, { promises } from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import path from "path";
import { glob, sync, globSync } from "glob";
import dayjs from "dayjs";

const BASE_PATH = "/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getAllPosts = async () => {
  //동기적으로 패턴 매칭을 수행하며 일치하는 파일이나 디렉터리의 목록을 반환
  const postPaths = globSync(`${POSTS_PATH}/**/*.mdx`);
  return await promises
    .readFile(postPaths, { encoding: "utf-8" })
    .then(console.log());
};

export default getAllPosts;
