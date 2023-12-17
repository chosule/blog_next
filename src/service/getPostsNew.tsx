import { serializeMax } from "@/lips/mdx";
import dayjs from "dayjs";
import fs from "fs";
import { globSync, sync } from "glob";
import matter from "gray-matter";
import path from "path";

type Slugs = {
  slug: string;
};
type PostMatter = {
  title: string;
  description: string;
  icon: string;
  image: string;
  tags: string[];
  draft?: boolean;
  date: string;
};
type Post = PostMatter & {
  content: string;
};

const BASE_PATH = "/posts";
const POST_PATH = path.join(process.cwd(), BASE_PATH);

// 모든파일들을 가져와서 gray-matter로 파싱
export async function getAllPosts() {
  const postPaths = sync(`${POST_PATH}/**/*.mdx`);
  return postPaths.reduce<Post[]>((ac, postPath) => {
    const post = parsePosts(postPath);
    if (post) return [...ac, post];
    return ac;
  }, []);
}

// 모든 파일을 읽어와서 .mdx을 없애는 프로그래밍
export async function getAllPostsPath(): Promise<Slugs[]> {
  try {
    const postPaths = globSync(`${POST_PATH}/**/*.mdx`);
    // console.log("postPath?", postPaths);
    return postPaths.map((filePath) => {
      let relativePath = path.relative(POST_PATH, filePath);
      //   console.log("relativePath", relativePath);
      relativePath = relativePath.replace(
        new RegExp("\\" + path.sep, "g"),
        "/"
      );
      relativePath = relativePath.replace(/\.mdx$/, "");
      return {
        slug: `posts/${relativePath}`,
      };
    });
  } catch (error) {
    console.error("path error", error);
    return [];
  }
}

//내가 만든 모든 mdx파일들중 해당페이지slug에 해당되는 mdx포스트만 가져옴
export async function getPost(slugs: any): Promise<Slugs | undefined> {
  const allPosts = await getAllPosts();
  //   console.log("allPosts?", allPosts);
  const slug = `/posts/${slugs.join("/")}`;
  console.log("slug", slug);
  const post = allPosts.find((post) => post.slug === slug);
  //   return post;
  //   const post = filePaths.find((filePath) => filePath.slug === slug);
  const mdx = await serializeMax(post.content);
  return mdx;
  //   return posts;
  // 반환예시
  // {slug:'posts/2023/11/test'}
}

// mdx파일 파싱해줌
export function parsePosts(postPath: string) {
  try {
    const markdownFile = fs.readFileSync(`${postPath}`, { encoding: "utf8" });
    // console.log("markdownFile경로", markdownFile);
    const { content, data } = matter(markdownFile);
    const grayMatter = data as Post;
    return {
      ...grayMatter,
      content,
      tags: grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format("YYYY-MM-DD"),
      slug: postPath.slice(postPath.indexOf(BASE_PATH)).replace(".mdx", ""),
    };
  } catch (e) {
    console.error(e);
  }
}
