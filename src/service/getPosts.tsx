import { promises } from "fs";
import path from "path";
import { sync } from "glob";

type Posts = {
  id: string;
  name: string;
};
const BASE_PATH = "/post";

const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export async function getPosts(): Promise<Posts[]> {
  // 모든 파일을 검색하도록 변경
  const postPaths = sync(`${POSTS_PATH}/**/*.*`);
  return postPaths.map((path) => {
    return {
      slug: path.slice(path.indexOf(BASE_PATH)).replace(),
    };
  });
}

export async function getPost(id: string): Promise<Posts | undefined> {
  const products = await getPosts();
  return products.find((item) => item.id === id);
}
