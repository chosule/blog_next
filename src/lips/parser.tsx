import { getPost, parsePosts } from "@/service/getPostsNew"
import { compileMDX } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeHighlight from "rehype-highlight";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

// export const parser = async(slugs) => {
//      const post = await getPost(slugs);
//         const content = post.content;
//     return await serialize(content,{
//         parseFrontmatter:true,
//         mdxOptions:{
//             recmaPlugins:[remarkToc,remarkGfm],
//             rehypePlugins:[
//                 rehypeSlug,
//                 rehypeCodeTitles,
//                 rehypePrism,[
//                     rehypeAutolinkHeadings,
//                     {
//                         properties:{
//                             className:["anchor"]
//                         }
//                     }
//                 ]
//             ],
//             format: "mdx",
//         }
//     })
// }


export async function parser(fileName:string) {
     const post = await getPost(fileName);
     const postContent = post.content;

     const {frontmatter} = await compileMDX({
        source: postContent,
        components:{
            "h3":"dd"
        },
        options:{
            parseFrontmatter:true,
            mdxOptions:{
                rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'wrap'
                    }],
                ],
            }
        }
     })
     console.log('frontMatter',frontmatter)
     const blogPostObj = {title:frontmatter.title}
     return blogPostObj
}
export default parser