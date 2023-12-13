import fs  from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";

const BASE_PATH = '/blogs';
const POST_PATH = path.join(process.cwd(),BASE_PATH);

//경로를 설정해줌 
export async function generateStaticParams () {
    // const postPaths = fs.readdirSync(path.join(process.cwd(),'blogs/**/*'))

    const postPaths = sync(`${POST_PATH}/**/*.mdx`);
    console.log('postPaths?',postPaths)
    const paths = postPaths.map((postPath) => {
        const startIndx = postPath.indexOf(BASE_PATH);
        return{
            slug:postPath.slice(startIndx).replace(/\\/g, '/').replace('.mdx','')
            // slug:postPath.replace('.mdx','')
        }
    })
    console.log('테스트??',paths);
    // return paths.map((path) => path.find((v) => v.slug === slug))


    // const files = fs.readdirSync(path.join(process.cwd(),'blogs'))
    // const paths = files.map(fileName =>({
    //     slug: fileName.replace('.mdx','')
    // }))
    // console.log('path',paths)
    // return paths
}


function getPosts({slug}:{slug:string}){
    
    const markdownFile = fs.readFileSync(path.join('blogs', slug + '.mdx'), 'utf-8');
    // console.log('markdownFile',markdownFile)
    const {data: fontMatter, content} = matter(markdownFile)

    return{
        fontMatter,
        slug,
        content
    }
}

export default function Page({params}){
    // console.log('params',params)
    const props = getPosts(params);
    return(
        <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate">
            <h1>{props.fontMatter.title}</h1>
            <MDXRemote source={props.content}/>
            {params.slug}
        </article>
    )
}