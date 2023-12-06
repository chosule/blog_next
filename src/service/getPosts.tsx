import { promises } from "fs";
import path from "path";

type Posts = {
    id:string;
    name:string;
}
export async function getPosts():Promise<Posts[]> {
    const filePath = path.join(process.cwd(),'data','blog.json');

    const data = await promises.readFile(filePath, "utf-8");
    
    return JSON.parse(data);
}

export async function getPost(id:string): Promise<Posts | undefined>{
    const products = await getPosts();
    return products.find((item) => item.id === id);
}

