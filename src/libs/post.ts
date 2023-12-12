import fs, { promises } from "fs";
import matter from "gray-matter";
import readingTime from 'reading-time';
import path from "path";
import { glob, sync } from "glob";
import dayjs from "dayjs";
import { promisify } from "util";


const BASE_PATH = '/posts';
// POSTS_PATh : 전체 포스트 경로를 나타내며, 현재 작업 디렉토리와 BASE_PATH를 결합하여 만들어진다.
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const globAsync = promisify(glob);

export const getAllPosts = async() => {
    try{
        const postPaths = await globAsync(`${POSTS_PATH}/**/*.mdx`,{});
        return postPaths.map(parsePost);
    }catch(error){
        console.error(error)
    }
  };


export const parsePost = async(postPath:string) => {
    try{
        const file = fs.readFileSync(postPath,{encoding:'utf-8'});
        const {content, data} = matter(file);
        const grayMatter = data;
        if(grayMatter.draft){
            return;
        }

        return{
            ...grayMatter,
            tags: grayMatter.tags.filter(Boolean),
            date: dayjs(grayMatter.date).format('YYYY-MM-DD'),
            content,
            slug: postPath.slice(postPath.indexOf(BASE_PATH)).replace('.mdx', ''),
            readingMinutes: Math.ceil(readingTime(content).minutes),
            wordCount: content.split(/\s+/gu).length,
        }
    }catch(error){
        console.log('error',error)
    }
}




export default getAllPosts;