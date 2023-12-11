import { promises, readFile } from "fs";
import path from "path";
import { sync } from "glob";
import dayjs from "dayjs";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";

export type Posts = {
  title: string;
  descriptopn: string;
  date: string;
  category: string;
  path: string;
  feature: boolean;
  image: string;
};

const BASE_PATH = '/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const parsePost = (postPath:string) => {
  try{
      //파일조회
      const file = fs.readFileSync(postPath,{ encoding:'utf-8'})
      const {content,data} = matter(file);
      const grayMatter = data;

      if(grayMatter.draft){
          return;
      }
      return {
        ...grayMatter,
        tags: grayMatter.tags.filter(Boolean),
        date: dayjs(grayMatter.date).format('YYYY-MM-DD'),
        content,
        slug: postPath.slice(postPath.indexOf(BASE_PATH)).replace('.mdx', ''),
        readingMinutes: Math.ceil(readingTime(content).minutes),
        wordCount: content.split(/\s+/gu).length,
      }
  }catch(e){
    console.error(e)
  }
}
//디렉토리 파싱
export const getAllposts = () =>{
  const postPaths:string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  return postPaths.reduce((ac,postPath)=>{
    const post = parsePost(postPath);
    if(!post) return ac;
    return [...ac , post]
  },[])
}




export async function getAllpost(): Promise<Posts[]> {
  const filePath = path.join(process.cwd(), "data", "blog.json");
  return await promises
    .readFile(filePath, "utf-8")
    .then<Posts[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getFeaturedPost(): Promise<Posts[]> {
  const post = await getAllpost();
  return post.filter((item) => item.feature === true);
}
