import { promises } from "fs";
import path from "path";

export type Posts = {
  title: string;
  descriptopn: string;
  date: string;
  category: string;
  path: string;
  feature: boolean;
  image: string;
};

export type PostData = Posts & { content: string };

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


export async function getPostData(fileName: string): Promise<PostData> {
  //내가 클릭한 path와 fiulname이 같을경우 보여줘야함
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const metaData = await getAllpost().then((posts) =>
    posts.find((post) => post.path === fileName)
  );

  if (!metaData)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을수 없습니다.`);

  const content = await promises.readFile(filePath, "utf-8"); //md파일을 html로 변환??

  return { ...metaData, content };
}
