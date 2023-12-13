import fs, { promises } from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import path from "path";
import { glob, sync, globSync } from "glob";
import dayjs from "dayjs";
import { promisify } from "util";

const BASE_PATH = "/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const globAsync = promisify(glob);

export const getAllPosts = async () => {
    try {
      const postPaths = await globAsync(`${POSTS_PATH}/**/*.mdx`);
      console.log('postPaths?',postPaths);
      return postPaths.map((filePath) => {
        const slug = filePath.slice(filePath.indexOf(BASE_PATH)).replace('.mdx', '');
        return { slug };
      });
    } catch (error) {
      console.error('Error while getting posts:', error);
      throw error; // Handle the error appropriately for your application
    }
  };
export default getAllPosts;
