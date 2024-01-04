import { MDXRemote ,MDXRemoteProps} from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkDirective from 'remark-directive'
import rehypePrettyCode from "rehype-pretty-code"
import rehypeCodeTitles from 'rehype-code-titles';
import remarkGfm from 'remark-gfm';



const options = {
    mdxOptions: {
        remarkPlugins: [remarkDirective],
        rehypePlugins: [
            rehypeCodeTitles,
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: 'github-dark', 
                }
            ],
            [
                rehypeAutolinkHeadings,
                {
                  properties: {
                    className: ["anchor"],
                  },
                },
            ],
        ],
    },

}

export default function CustomMdx(props:MDXRemoteProps) {
    return(
        <MDXRemote 
            {...props}
            components={{ ...(props.components || {})}}
            options={options}
        />
    )
}