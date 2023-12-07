import { promises, readFile } from "fs";
import path from "path";
import { sync } from "glob";

export type Posts = {
  title: string,
  descriptopn:string,
  date :string,
  category:string,
  path:string,
  feature:boolean,
  image:string
};


export async function getAllpost():Promise<Posts[]> {
  const filePath = path.join(process.cwd(),'data','blog.json');
  return await promises.readFile(filePath,'utf-8')
  .then<Posts[]>(JSON.parse)
  .then((posts) => posts.sort((a,b) => (a.date) > (b.date) ? -1 :1))
}

export async function getFeaturedPost():Promise<Posts[]>{
  const post = await getAllpost();
  return post.filter((item) => item.feature === true);
}

