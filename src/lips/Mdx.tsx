import { MDXRemote ,MDXRemoteProps} from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkDirective from 'remark-directive'
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm";
import { SerializeOptions } from "node_modules/next-mdx-remote/dist/types";

const options: SerializeOptions = {
    mdxOptions: {
        remarkPlugins: [remarkDirective,remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                // @ts-ignore
                rehypePrettyCode ,
                {
                    theme: 'one-dark-pro', 
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

export default function Mdx(props:MDXRemoteProps) {
    return(
        <MDXRemote 
            {...props}
            components={{ ...(props.components || {})}}
            options={options}
        />
    )
}