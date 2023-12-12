import fs, { promises } from "fs";
import matter from "gray-matter";
import readingTime from 'reading-time';
import path from "path";
import { sync } from "glob";
import dayjs from "dayjs";


const BASE_PATH = '/posts';
// POSTS_PATh : 전체 포스트 경로를 나타내며, 현재 작업 디렉토리와 BASE_PATH를 결합하여 만들어진다.
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getAllPosts = async() =>{
    //sync 함수를 사용하여 POSTS_PATH 디렉토리 내의 모든 .mdx 확장자를 가진 파일의 경로를 가져온다
    const postPaths = sync(`${POSTS_PATH}/**/*.mdx`);
    return await promises.readFile(postPaths,"utf-8")
   
}


export const parsePost = (postPath:string) => {
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