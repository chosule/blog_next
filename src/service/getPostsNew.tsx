import dayjs from "dayjs";
import fs from "fs";
import { globSync, sync } from "glob";
import matter from "gray-matter";
import { redirect } from "next/navigation";
import path from "path";

type Slugs = {
  slug: string;
  content?: string;
};
type PostMatter = {
  title: string;
  description: string;
  icon: string;
  image: string;
  tags: string[];
  titlelist:string;
  draft?: boolean;
  feature?: boolean;
  date: string;
};
export type Post = PostMatter & {
  slug: string;
  content: string;
};

export type PostData =  {
  next: Post | null;
  prev : Post | null;
}

const BASE_PATH = "/posts";
const POST_PATH = path.join(process.cwd(), BASE_PATH);

// 모든파일들을 가져와서 gray-matter로 파싱
export async function getAllPosts(): Promise<Post[]> {
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
    return postPaths.map((filePath) => {
      let relativePath = path.relative(POST_PATH, filePath);
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
export async function getPost(slugs: any): Promise<Post> {
  const allPosts = await getAllPosts();
  const slug = `posts/${slugs.join("/")}`;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    redirect("/blog");
  }
  return post;
}

// mdx파일 파싱
export function parsePosts(postPath: string): Post | undefined {
  try {
    const markdownFile = fs.readFileSync(`${postPath}`, { encoding: "utf8" });
    const relativePath = path.relative(POST_PATH, postPath);
    const { content, data } = matter(markdownFile);
    const grayMatter = data as PostMatter;
    if (grayMatter.draft) {
      return;
    }
    return {
      ...grayMatter,
      content,
      tags: grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format("YYYY-MM-DD"),
      slug: `posts/${relativePath
        .replace(/\.mdx$/, "")
        .replace(new RegExp("\\" + path.sep, "g"), "/")}`,
    };
  } catch (e) {
    console.error(e);
  }
}

export async function getFeaturedPost() {
  const posts = await getAllPosts();
  return posts.filter((post) => post.feature === true);
}


export async function getPostData(fileSlug:string[]):Promise<PostData>{
  const posts = await getAllPosts();
  const post = await getPost(fileSlug);
  
  const index = posts.findIndex((n)=> n.slug == post.slug);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  return{...post , next , prev}
}